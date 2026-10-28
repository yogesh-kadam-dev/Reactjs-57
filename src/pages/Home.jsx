
import { useState, useEffect } from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import ProductCart from "../Comman/ProductCart.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);
  const [feature, setFeature] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const [bestSellingProduct, setBestSellingProduct] = useState([]);

  // Slider API
  useEffect(() => {
    axios
      .get("https://a2zithub.org/dairy/abi/slider_det")
      .then((res) => {
        setSlides(Array.isArray(res.data) ? res.data : []);
      })
      .catch((error) => console.log("Slider API Error:", error));
  }, []);

  
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Feature Product API
  useEffect(() => {
    axios
      .get("https://a2zithub.org/dairy/abi/feature_product")
      .then((res) => {
        setFeature(Array.isArray(res.data) ? res.data : []);
      })
      .catch((error) => console.log("Feature API Error:", error));
  }, []);

  // New Product API
  useEffect(() => {
    axios
      .get("https://a2zithub.org/dairy/abi/new_product")
      .then((res) => {
        setNewProduct(Array.isArray(res.data) ? res.data : []);
      })
      .catch((error) => console.log("New Product API Error:", error));
  }, []);

  // Best Selling Product API
  useEffect(() => {
    axios
      .get("https://a2zithub.org/dairy/abi/best_selling_product")
      .then((res) => {
        setBestSellingProduct(Array.isArray(res.data) ? res.data : []);
      })
      .catch((error) =>
        console.log("Best Selling API Error:", error)
      );
  }, []);

  // Reusable Product Section
  const renderProducts = (products, message) => (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      {products.length > 0 ? (
        products.slice(0, 8).map((val, index) => (
          <ProductCart key={val.id ?? index} data={val} />
        ))
      ) : (
        <p className="col-span-full py-6 text-center text-gray-500">
          {message}
        </p>
      )}
    </div>
  );

  return (
    <>
      <Navbar />

  
      <section className="w-full overflow-hidden bg-gray-900">
        <div className="relative h-[300px] w-full sm:h-[450px] lg:h-[600px]">
          {slides.length > 0 ? (
            <img
              key={current}
              src={slides[current]?.slider_img}
              alt={`Slide ${current + 1}`}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-white">
              Loading slides...
            </div>
          )}

         

          {/* Slider Dots */}
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-3 w-3 rounded-full transition ${
                  current === index
                    ? "scale-125 bg-blue-500"
                    : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Products */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Feature Product
          </h2>
          <Link
            to="/product"
            className="font-semibold text-indigo-600 hover:text-indigo-800"
          >
            View All →
          </Link>
        </div>

        {renderProducts(feature, "No feature products available.")}
      </section>

      {/* New Products */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            New Product
          </h2>
          <Link
            to="/product"
            className="font-semibold text-indigo-600 hover:text-indigo-800"
          >
            View All →
          </Link>
        </div>

        {renderProducts(newProduct, "No new products available.")}
      </section>

      {/* Best Selling Products */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Best Selling Product
          </h2>
          <Link
            to="/product"
            className="font-semibold text-indigo-600 hover:text-indigo-800"
          >
            View All →
          </Link>
        </div>

        {renderProducts(
          bestSellingProduct,
          "No best selling products available."
        )}
      </section>

      <Footer />
    </>
  );
}

export default Home;
