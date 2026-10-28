
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_mobile, setMobile] = useState("");
  const [user_password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const obj = {
      user_name,
      user_email,
      user_mobile,
      user_password,
    };

    try {
      setLoading(true);

      const res = await axios.post(
        "https://a2zithub.org/dairy/abi/user_register",
        obj
      );

      console.log("Registration Response:", res.data);


      navigate("/login");
    } catch (err) {
      console.log("Registration Error:", err.response?.data || err.message);

      alert("Registration failed. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4 py-10">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Register your account to get started!
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleRegister} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={user_name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
           <div>
  <label className="mb-2 block font-medium text-gray-700">
    Email ID
  </label>

  <input
    type="email"
    name="user_email"
    autoComplete="email"
    placeholder="Enter your Email ID"
    value={user_email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
  />
</div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Mobile No.
            </label>

            <input
              type="tel"
              name="user_mobile"
              placeholder="Enter Mobile No."
              value={user_mobile}
              onChange={(e) => setMobile(e.target.value)}
              pattern="[0-9]{10}"
              maxLength={10}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              name="user_password"
              placeholder="Enter Your Password"
              value={user_password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Show Password */}
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
              className="h-4 w-4 accent-blue-600"
            />

            Show Password
          </label>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}

          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
