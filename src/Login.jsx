import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError("");

            try {
            const res = await axios.post("http://localhost:8000/api/login", {
                email,
                password,
            });

            localStorage.setItem("token", res.data.token);

            navigate("/dashboard");
        } catch (error) {
            setError(error.response?.data?.message || "Login gagal, coba Lagi!");
        }
    };

    return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-400 min-h-screen flex items-center justify-center relative" >
        <div className="bg-white text-black rounded-xl shadow-lg p-8 w-[400px] text-center">
        <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
        <p className="text-gray-500 text-sm mb-6">
            We missed you! Please enter your details.
        </p>

        {error && (
            <div className="bg-red-100 text-red-600 p-2 rounded mb-4">
                {error}
            </div>
        )}

        {/* Email */}
        <input
            type="email"
            placeholder="Enter your Email"
            className="w-full p-3 bg-white border rounded-lg mb-3 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 bg-white border rounded-lg mb-3 text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        {/* Forgot + Remember */}
        <div className="flex items-center justify-between text-sm mb-4">
            <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Remember me</span>
            </label>
            <a href="#" className="text-blue-500 hover:underline">
            Forgot password?
            </a>
        </div>

        {/* Sign in button */}
        <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-3 rounded-lg mb-3 hover:bg-blue-600 transition"
        >
            Sign in
        </button>

        {/* Google login */}
        <button className="w-full border py-3 bg-white rounded-lg mb-4 flex items-center justify-center space-x-2 hover:bg-gray-50 transition">
            <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="google"
            className="w-5 h-5"
            />
            <span>Sign in with Google</span>
        </button>

        {/* Signup link */}
        <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
            Sign up
            </a>
        </p>
        </div>
    </div>
    );
}

export default Login;