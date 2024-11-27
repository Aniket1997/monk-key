import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api/AuthApi"; // Import the login function
import Cookies from "js-cookie"; // Import js-cookie

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const userData = { email: formData.email, password: formData.password };
      const result = await loginUser(userData); // Call the login API function

      if (result.token) {
        // If the token exists, store it in a cookie (no "Remember Me" option)
        Cookies.set("token", result.token, { expires: 1 }); // Cookie expires in 1 day by default

        // Optionally, you can also store user info in localStorage or in Redux state
        console.log("User logged in successfully:", result.user);
      } else {
        setError(result.message); // Set error if no token is returned
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary-light to-accent-dark">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-error text-center">{error}</p>}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-primary font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
