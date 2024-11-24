// src/components/SignupForm.jsx
import React, { useState } from "react";
import InputField from "../component/InputField";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", formData);
      setErrors({});
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          placeholder="Enter your email"
          error={errors.email}
        />
        <InputField
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          name="phone"
          placeholder="Enter your phone number"
          error={errors.phone}
        />
        <InputField
          label="Full Name"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          name="fullName"
          placeholder="Enter your full name"
          error={errors.fullName}
        />
        <InputField
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          placeholder="Enter your password"
          error={errors.password}
        />
        <InputField
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          placeholder="Confirm your password"
          error={errors.confirmPassword}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
