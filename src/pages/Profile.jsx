
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import axios from "axios";
import { useEffect } from "react";


function Profile() {

const [profile, setProfile] = useState({})

    useEffect(()=>{

        var obj={

            "token":localStorage.getItem("token")

        }

        axios.post("https://a2zithub.org/dairy/abi/user_profile",obj).then((res)=>{
            console.log('response',res.data.data[0])
            setProfile(res.data.data[0])

        })

        },[]);

   

    

     
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 px-4 py-10">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white/80 shadow-xl">

          {/* Top Gradient */}
          <div className="h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          {/* Profile Header */}
          <div className="px-5 pb-8 pt-8 text-center sm:px-10">

            <img
              src="public/WhatsApp Image 2026-08-29 at 8.07.54 PM.jpeg"
              alt="Yogesh Profile"
              className="mx-auto h-28 w-28 rounded-full border-4 border-white bg-white object-cover shadow-lg"
            />

            <h1 className="mt-4 text-2xl font-bold text-gray-800">
            Kadam Yogesh Digambar
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Full Stack Devloper React js
            </p>

            <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Active
            </span>
          </div>

          {/* Profile Details */}
          <div className="grid grid-cols-1 gap-4 px-5 pb-6 sm:grid-cols-2 sm:px-8">

            {/* Full Name */}
            <div className="flex items-center gap-4 rounded-2xl border border-indigo-100 bg-white p-4 shadow-md">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-2xl">
                👤
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="break-words font-bold text-gray-800">
                Kadam Yogesh
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center gap-4 rounded-2xl border border-pink-100 bg-white p-4 shadow-md">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-2xl">
                📞
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-bold text-gray-800">
                 +91 {profile.user_mobile}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 rounded-2xl border border-purple-100 bg-white p-4 shadow-md">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                ✉️
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="break-all font-bold text-gray-800">
                 {profile.user_email}
                </p>
              </div>
            </div>

            {/* Password */}
            <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-md">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                🔑
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-500">Password</p>

                <p className="font-bold tracking-widest text-gray-800">
                  {profile.user_password}

                </p>
              </div>

              <button
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                {showPassword ? "Hide" : "View"}
              </button>
            </div>

            {/* Order History */}
            <Link
              to="/orders"
              className="flex items-center gap-4 rounded-2xl border border-indigo-100 bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-2xl">
                🛍️
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-bold text-gray-800">Order History</p>
                <p className="mt-1 text-sm text-gray-500">
                  View your previous orders
                </p>
              </div>

              <span className="text-xl font-bold text-indigo-600">→</span>
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="flex items-center gap-4 rounded-2xl border border-pink-100 bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-2xl">
                💗
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-bold text-gray-800">My Wishlist</p>
                <p className="mt-1 text-sm text-gray-500">
                  View your liked products
                </p>
              </div>

              <span className="text-xl font-bold text-pink-600">→</span>
            </Link>

          </div>

          {/* Bottom Buttons */}
          <div className="flex flex-col justify-center gap-4 border-t border-purple-100 px-5 py-7 sm:flex-row">

            <button
              onClick={() => navigate("/edit-profile")}
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-3 font-bold text-white shadow-md transition hover:scale-105 hover:shadow-lg"
            >
              ✏️ Edit Profile
            </button>

            <button
              onClick={Logout}
              className="rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-10 py-3 font-bold text-white shadow-md transition hover:scale-105 hover:shadow-lg"
            >
              🚪 Logout
            </button>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;