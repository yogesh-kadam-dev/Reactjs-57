
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import axios from "axios";

function Checkout() {
    const navigate = useNavigate();

    const [area, setArea] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("India");
    const [pincode, setPincode] = useState("");
    const [payment_type, setPayment_type] = useState("COD");
    const [loading, setLoading] = useState(false);

    const [cart, setCart] = useState([]);
    const [grand_total, setGrand_total] = useState(0);

    // Get Cart Data
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        axios
            .post("https://a2zithub.org/dairy/abi/cart_list", { token })
            .then((res) => {
                console.log("Cart:", res.data);

                if (Array.isArray(res.data)) {
                    setCart(res.data);

                    let sum = 0;

                    for (let i = 0; i < res.data.length; i++) {
                        sum +=
                            Number(res.data[i].price) *
                            Number(res.data[i].qty);
                    }

                    setGrand_total(sum);
                }
            })
            
    }, [navigate]);

    // Place Order
    async function placeOrder(e) {
        e.preventDefault();

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        const obj = {
            area,
            city,
            district,
            state,
            country,
            pincode,
            payment_type,
            token
        };

        console.log("API URL:", "https://a2zithub.org/dairy/abi/place_order");
        console.log("METHOD: POST");
        console.log("ORDER DATA:", obj);

        try {
            setLoading(true);

            const res = await axios.post(
                "https://a2zithub.org/dairy/abi/place_order",
                obj
            );

            console.log("Order Response:", res.data);

            if (res.data.status === "success") {
                alert("Order placed successfully!");
                navigate("/product");
            } else {
                alert(res.data.msg || "Order place failed. Check Console.");
            }
        } catch (error) {
            console.log(
                "Order API Error:",
                error.response?.data || error.message
            );
            alert("API request failed. Please check Console.");
        } finally {
            setLoading(false);
        }
    }

    const inputStyle =
        "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100";

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-8">

                {/* Page Heading */}
                <div className="mx-auto mb-10 max-w-6xl">
                    <div className="rounded-3xl bg-gradient-to-r from-violet-700 to-indigo-600 p-7 text-white shadow-lg sm:p-10">
                        <p className="text-sm font-semibold uppercase tracking-[4px] text-violet-200">
                            ShopZone / Order
                        </p>

                        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                            Checkout
                        </h1>

                        <p className="mt-2 text-violet-100">
                            Your shopping journey is almost complete.
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={placeOrder}
                    className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-7 lg:grid-cols-3"
                >

                    {/* Delivery Form */}
                    <div className="space-y-7 lg:col-span-2">

                        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">

                            <div className="mb-7 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
                                    📍
                                </div>

                                <div>
                                    <h2 className="text-xl font-extrabold text-slate-800">
                                        Delivery Address
                                    </h2>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Where should we deliver your order?
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                                <div className="sm:col-span-2">
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Area / Street Address
                                    </label>
                                    <input
                                        type="text"
                                        value={area}
                                        onChange={(e) => setArea(e.target.value)}
                                        placeholder="Enter area and street"
                                        className={inputStyle}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder="Enter city"
                                        className={inputStyle}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        District
                                    </label>
                                    <input
                                        type="text"
                                        value={district}
                                        onChange={(e) => setDistrict(e.target.value)}
                                        placeholder="Enter district"
                                        className={inputStyle}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        State
                                    </label>
                                    <input
                                        type="text"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        placeholder="Enter state"
                                        className={inputStyle}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        className={inputStyle}
                                        required
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Pincode
                                    </label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]{6}"
                                        maxLength={6}
                                        value={pincode}
                                        onChange={(e) => setPincode(e.target.value)}
                                        placeholder="Enter 6-digit pincode"
                                        className={inputStyle}
                                        required
                                    />
                                </div>

                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">

                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                                    💳
                                </div>

                                <div>
                                    <h2 className="text-xl font-extrabold text-slate-800">
                                        Payment Method
                                    </h2>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Select your preferred payment option.
                                    </p>
                                </div>
                            </div>

                            <label className="flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-violet-500 bg-violet-50 p-5">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="COD"
                                    checked={payment_type === "COD"}
                                    onChange={(e) => setPayment_type(e.target.value)}
                                    className="h-5 w-5 accent-violet-600"
                                />

                                <div className="flex-1">
                                    <p className="font-bold text-slate-800">
                                        Cash on Delivery
                                    </p>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Pay when your order arrives.
                                    </p>
                                </div>

                                <span className="rounded-full bg-violet-200 px-3 py-1 text-xs font-bold text-violet-800">
                                    COD
                                </span>
                            </label>

                            <label className="mt-4 flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-violet-400">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="ONLINE"
                                    checked={payment_type === "ONLINE"}
                                    onChange={(e) => setPayment_type(e.target.value)}
                                    className="h-5 w-5 accent-violet-600"
                                />

                                <div>
                                    <p className="font-bold text-slate-800">
                                        Online Payment
                                    </p>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Use only if supported by your API.
                                    </p>
                                </div>
                            </label>

                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:sticky lg:top-6">

                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                                🛒
                            </div>

                            <h2 className="text-xl font-extrabold text-slate-800">
                                Order Summary
                            </h2>
                        </div>

                        <div className="space-y-5">

                            <div className="flex items-center justify-between text-slate-500">
                                <span>Total Products</span>
                                <span className="font-bold text-slate-800">
                                    {cart.length}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-slate-500">
                                <span>Payment</span>
                                <span className="rounded-lg bg-emerald-50 px-3 py-1 font-bold text-emerald-700">
                                    {payment_type}
                                </span>
                            </div>

                            <div className="border-t border-dashed border-slate-200 pt-5">
                                <p className="text-sm font-medium text-slate-500">
                                    Grand Total
                                </p>

                                <h3 className="mt-2 text-4xl font-extrabold text-slate-900">
                                    ₹{grand_total}
                                </h3>
                            </div>

                            <button
                                type="submit"
                                disabled={loading || cart.length === 0}
                                className="w-full rounded-xl bg-violet-700 px-5 py-4 font-bold text-white shadow-md transition hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {loading ? "Processing..." : "Place Order  →"}
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate("/cart")}
                                className="w-full rounded-xl border border-slate-200 px-5 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
                            >
                                ← Back to Cart
                            </button>

                            <p className="text-center text-xs leading-5 text-slate-400">
                                Thank you for shopping with ShopZone.
                            </p>

                        </div>
                    </div>

                </form>
            </div>

            <Footer />
        </>
    );
}

export default Checkout;
