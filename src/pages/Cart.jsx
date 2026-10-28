
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get Cart Data
  const fetchCart = useCallback(() => {
    const obj = {
      token: localStorage.getItem("token"),
    };

    axios
      .post("https://a2zithub.org/dairy/abi/cart_list", obj)
      .then((res) => {
        console.log("Cart Response:", res.data);

        if (Array.isArray(res.data)) {
          setCart(res.data);
        } else {
          setCart([]);
        }
      })
      .catch((error) => {
        console.log("Cart Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // Total Amount
  const totalAmount = cart.reduce((total, val) => {
    return total + Number(val.price) * Number(val.qty);
  }, 0);

  // Remove Product
  function remove(product_econ_cart_id) {
    const obj = {
      product_econ_cart_id: product_econ_cart_id,
      token: localStorage.getItem("token"),
    };

    axios
      .post("https://a2zithub.org/dairy/abi/remove_cart_qty", obj)
      .then((res) => {
        console.log("Remove Response:", res.data);
        fetchCart();
      })
      .catch((error) => {
        console.log("Remove Error:", error);
        alert("Product remove failed!");
      });
  }

  // Increase Quantity (UI update)
  function increaseQty(product_econ_cart_id) {
    setCart((oldCart) =>
      oldCart.map((val) =>
        val.product_econ_cart_id === product_econ_cart_id
          ? { ...val, qty: Number(val.qty) + 1 }
          : val
      )
    );
  }

  // Decrease Quantity (UI update)
  function decreaseQty(product_econ_cart_id) {
    setCart((oldCart) =>
      oldCart.map((val) =>
        val.product_econ_cart_id === product_econ_cart_id
          ? {
              ...val,
              qty: Math.max(1, Number(val.qty) - 1),
            }
          : val
      )
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 px-4 py-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-xl bg-white shadow-lg">

          <h1 className="py-6 text-center text-3xl font-bold text-gray-800">
            Cart Page
          </h1>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-left">
              <thead className="bg-orange-500 text-sm text-white">
                <tr>
                  <th className="px-5 py-4">Sr.No</th>
                  <th className="px-5 py-4">Product Name</th>
                  <th className="px-5 py-4">Image</th>
                  <th className="px-5 py-4">Qty</th>
                  <th className="px-5 py-4">Price</th>
                  <th className="px-5 py-4">Total</th>
                  <th className="px-5 py-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="7" className="py-10 text-center">
                      Loading Cart...
                    </td>
                  </tr>
                ) : cart.length === 0 ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="py-10 text-center text-gray-500"
                    >
                      Your Cart Is Empty!
                    </td>
                  </tr>
                ) : (
                  cart.map((val, index) => (
                    <tr
                      key={val.product_econ_cart_id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="px-5 py-6">{index + 1}</td>

                      <td className="px-5 py-6 font-medium">
                        {val.product_name}
                      </td>

                      <td className="px-5 py-4">
                        <img
                          src={val.product_img}
                          alt={val.product_name}
                          className="h-12 w-12 rounded object-cover"
                        />
                      </td>

                      <td className="px-5 py-6">
                        <div className="flex w-fit items-center rounded border border-gray-300">
                          <button
                            onClick={() =>
                              decreaseQty(val.product_econ_cart_id)
                            }
                            disabled={Number(val.qty) <= 1}
                            className="px-3 py-1 text-2xl  disabled:opacity-40"
                          >
                            −
                          </button>

                          <span className="border-x px-3 py-1">
                            {val.qty}
                          </span>

                          <button
                            onClick={() =>
                              increaseQty(val.product_econ_cart_id)
                            }
                            className="px-3 text-2xl py-1 text-green-700"
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td className="px-5  py-6">
                        ₹{Number(val.price)}
                      </td>

                      <td className="px-5 py-6 font-bold">
                        ₹{Number(val.price) * Number(val.qty)}
                      </td>

                      <td className="px-5 py-6">
                        <button
                          onClick={() =>
                            remove(val.product_econ_cart_id)
                          }
                          className="rounded bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-5 border-t border-gray-300 p-5 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/product"
              className="w-fit rounded-md border border-green-700 px-5 py-3 font-semibold text-green-800 hover:bg-green-800 hover:text-white"
            >
              ← Continue Shopping
            </Link>

             <Link
             to="/checkout"
             className="bg-blue-600 text-white ml-100 px-6 py-3
             rounded-lg hover:bg-blue-700 transition"
            >
             Checkout →
            </Link>


            <div className="text-right">
              <p className="text-sm text-gray-500">Total Amount</p>

              <h2 className="text-3xl font-bold text-gray-800">
                ₹{totalAmount}
              </h2>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Cart;
