import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="px-5 py-16">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Welcome To About Page
        </h1>

        {/* About Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2021/08/06/13/34/fruits-6526308_1280.png"
              alt="Clothing Store"
              className="w-full h-[350px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-5">
              About Our Store
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              Welcome to our online shopping store. We offer stylish,
              comfortable and quality clothing for everyone. Our goal is
              to provide a great shopping experience with the latest
              fashion trends at affordable prices.
            </p>

            <div className="space-y-3 mb-7">
              <p>✔ Quality Products</p>
              <p>✔ Affordable Prices</p>
              <p>✔ Latest Fashion Trends</p>
              <p>✔ Customer Satisfaction</p>
            </div>

            <button className="bg-black text-white px-7 py-3 rounded-lg hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;