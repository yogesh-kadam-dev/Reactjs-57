
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Comman/Navbar";

function Login() {
  const navigate = useNavigate();

  const [user_mobile, setMobile] = useState("");
  const [user_password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const obj = {
      user_mobile,
      user_password,
    };

    axios
      .post("https://a2zithub.org/dairy/abi/user_login", obj)
      .then((res) => {
        console.log("Login Response:", res.data);

        if (res.data.status === "success" && res.data.token) {
          localStorage.setItem("token", res.data.token);

          // Login successful
          navigate("/product");
        } else {
          setError("Invalid Mobile Number or Password");
        }
      })
      .catch((err) => {
        console.log("Login Error:", err);
        setError("Login failed. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      {/* Main Navbar */}
      <Navbar />

      {/* Login Form */}
      <div className="min-h-[calc(100vh-72px)] flex items-center justify-center bg-gray-100 px-4 py-8">

        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

          <h1 className="text-3xl font-bold text-center mb-2">
            Login
          </h1>

          <p className="text-center text-gray-500 mb-6">
            Welcome back! Please login to continue.
          </p>

          {/* Error Message */}
          {error && (
            <p className="text-center mb-4 font-medium bg-red-100 rounded-lg text-red-700 p-3">
              {error}
            </p>
          )}

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Mobile Number */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Mobile Number
              </label>

              <input
                type="tel"
                value={user_mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter mobile number"
                maxLength={10}
                pattern="[0-9]{10}"
                inputMode="numeric"
                required
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">

                <input
                  type={showPassword ? "text" : "password"}
                  value={user_password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="w-full p-3 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-4 text-blue-600 font-medium hover:bg-gray-50"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          {/* Register Link */}
          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Login;