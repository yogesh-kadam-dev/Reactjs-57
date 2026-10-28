
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Product_det() {
  const { product_id } = useParams();
  const navigation = useNavigate();

  const [product_det, setProduct_det] = useState({});

  const obj = {
    product_id: product_id,
    token: localStorage.getItem("token"),
  };

  useEffect(() => {
    axios.post("https://a2zithub.org/dairy/abi/product_by_id",obj
      )
      .then((res) => {
        console.log("response", res.data);
        setProduct_det(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [addToCart]);

  function addToCart() {

    if(!localStorage.getItem("token")){
      navigation("/Login")
    }

    axios
      .post(
        "https://a2zithub.org/dairy/abi/addtocart",
        obj
      )
      .then((res) => {
        console.log("CartResponse", res.data);
        toast.success("Added To Cart");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Unable to add product to cart");
      });
  }

  return (
    <>
      <Navbar />
      <ToastContainer />

      <section className="px-5 py-10 min-h-[70vh]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Product Image */}
          <div className="flex justify-center bg-gray-100 rounded-xl p-5">
            <img
              src={product_det.product_img}
              alt={product_det.product_name}
              className="w-full h-[450px] object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-gray-900">
              {product_det.product_name}
            </h2>

            <h3 className="text-2xl font-semibold text-green-700">
              ₹{product_det.price}
            </h3>

            <p className="text-base text-gray-600 leading-7">
              {product_det.details}
            </p>
            
          {/* Buttons */}
       <div className="flex flex-wrap items-center gap-3 pt-4">

  {product_det.cart === "Yes" ? (
    <Link
      to="/cart"
      className="flex h-12 items-center justify-center bg-green-600 text-white px-40 rounded-lg hover:bg-gray-800 transition duration-300"
    >
      Go To Cart
    </Link>
  ) : (
    <button
      onClick={addToCart}
      className="flex h-12 items-center justify-center bg-green-600 text-white px-40 rounded-lg hover:bg-gray-800 transition duration-300"
    >
      Add to Cart
    </button>
  )}

</div>

            <Link
           to="/product"
            className="inline-flex items-center gap-1 text-green-800 font-medium text-sm hover:text-green-600 transition duration-300 cursor-pointer"
>
             ← Back To Product
           </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Product_det;
