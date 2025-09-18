import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const name = 'Arapaan';

function Title() {
  return <div className='absolute top-5 left-5 text-white font-semibold'>
    Home page
  </div>;
}

function Modal() {
  return (
    <div className="bg-white text-black rounded-xl shadow-lg p-8 w-[400px] text-center">
      <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
      <p className="text-gray-500 text-sm mb-6">
        We missed you! Please enter your details.
      </p>

      {/* Email */}
      <input
        type="email"
        placeholder="Enter your Email"
        className="w-full p-3 bg-white border rounded-lg mb-3 text-sm"
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Enter Password"
        className="w-full p-3 bg-white border rounded-lg mb-3 text-sm"
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
      <button className="w-full bg-blue-500 text-white py-3 rounded-lg mb-3 hover:bg-blue-600 transition">
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
    );
}

function App() {  
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-400 min-h-screen flex items-center justify-center relative">
      <Title />
      <Modal />
    </div>
  );
}

export default App
