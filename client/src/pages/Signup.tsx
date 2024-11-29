import React, { useState } from "react";
import InputField from "../component/InputField.tsx";
import meditate from "../assets/meditate.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { registerUser } from "../api/AuthApi"; // Import the registerUser function

interface FormData {
  email: string;
  phone: string;
  fullName: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  email?: string;
  phone?: string;
  fullName?: string;
  password?: string;
  confirmPassword?: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false); // To manage the loading state
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // To display success message

  const validate = (): boolean => {
    const errors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Invalid email address.";
    }
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required.";
    }
    if (!formData.password || formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setSuccessMessage(null); // Reset the success message on form submit

      try {
        const userData = {
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        };

        const response = await registerUser(userData); // Call the registerUser function
        setSuccessMessage(response.message); // Handle the response from the API
        setLoading(false); // Stop loading after success
        setFormData({
          email: "",
          phone: "",
          fullName: "",
          password: "",
          confirmPassword: "",
        }); // Reset form after submission
      } catch (error) {
        setLoading(false); // Stop loading on error
        setSuccessMessage(null); // Reset success message
        setErrors({ email: "Registration failed. Please try again." }); // Handle error message
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 px-10 py-5">
      {/* Left Section - Hidden on Mobile */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-10 bg-gradient-to-b from-blue-400 to-blue-600 text-white rounded-l-xl">
        <motion.img
          src={meditate}
          alt="Meditation illustration"
          className="w-32 md:w-40 mb-8"
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Welcome to <span className="text-yellow-400">Monk Key</span>
        </h1>
        <p className="text-sm md:text-base text-center max-w-md leading-relaxed">
          Unlock your potential by creating an account and accessing
          personalized features tailored just for you.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 bg-white rounded-xl shadow-lg">
        {/* Brand Image and Name for Mobile */}
        <div className="lg:hidden flex flex-col items-center mb-6">
          <motion.img
            src={meditate}
            alt="Meditation illustration"
            className="w-24 md:w-32 mb-4"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          <h1 className="text-xl font-bold text-blue-700">
            Welcome to Monk Key
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-700 mb-6">
          Create Your Account
        </h2>
        {successMessage && (
          <p className="text-green-500 text-center mb-4">{successMessage}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            placeholder="Enter your email"
            error={errors.email}
          />
          <InputField
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
            placeholder="Enter your phone number"
            error={errors.phone}
          />
          <InputField
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            name="fullName"
            placeholder="Enter your full name"
            error={errors.fullName}
          />
          <InputField
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            placeholder="Enter your password"
            error={errors.password}
          />
          <InputField
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            placeholder="Confirm your password"
            error={errors.confirmPassword}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            aria-label="Sign up"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
