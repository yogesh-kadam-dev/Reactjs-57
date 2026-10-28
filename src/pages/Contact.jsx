
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50 px-5 py-12">
        <h1 className="text-3xl font-bold text-center mb-4">
          Welcome To Contact Page
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Get in touch with us. We are happy to help you!
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">
              Contact Us
            </h2>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-3 w-full"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg p-3 w-full"
              />

              <input
                type="text"
                placeholder="Your Subject"
                className="border border-gray-300 rounded-lg p-3 w-full"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="border border-gray-300 rounded-lg p-3 w-full"
              />

              <button
                type="button"
                className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 space-y-3 text-gray-700">
              <p>📧 Email: support@example.com</p>
              <p>📞 Phone: +91 9876543210</p>
              <p>📍 Address: Ahilyanagar, Maharashtra</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              Find Us On Map
            </h2>

           
<iframe
  title="Ahilyanagar Google Map"
  src="https://maps.google.com/maps?q=Ahilyanagar%2C%20Maharashtra%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
  className="w-full h-[350px] rounded-lg"
  loading="lazy"
  allowFullScreen
/>


            <p className="text-gray-600 mt-4">
              Visit us in Ahilyanaagr, Maharashtra.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
