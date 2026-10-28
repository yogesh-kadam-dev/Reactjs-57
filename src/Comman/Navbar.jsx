
import { RiIdCardFill, RiShoppingCart2Fill } from "@remixicon/react";
import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-600">
            SHOPPING
          </h1>
        </Link>

        {/* All Pages - Login adhi ani login nantar */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>

          <Link to="/product" className="hover:text-blue-600">
            Product
          </Link>

          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Login / Register / Profile / Cart */}
        <div className="flex items-center gap-3">
          {token ? (
            <>
              <Link
                to="/profile"
                className="p-3 bg-blue-600 text-white rounded-lg"
                title="Profile"
              >
                <RiIdCardFill size={22} />
              </Link>

              <Link
                to="/cart"
                className="p-3 bg-blue-600 text-white rounded-lg"
                title="Cart"
              >
                <RiShoppingCart2Fill size={22} />
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Register
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
