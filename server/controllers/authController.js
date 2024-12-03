const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register a new user
const register = async (req, res) => {
  const { name, email, password, phone } = req.body; // Include phone in request body

  try {
    // Check if a user with the given email or phone already exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(400).json({
        status:"failure",
        message: "User with this email or phone number already exists",
      });
    }

    // Create a new user
    const newUser = new User({ name, email, password, phone });
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res
      .status(201)
      .json({ status:"success",message: "User registered successfully", token, user: newUser });
  } catch (err) {
    res.status(500).json({ status:"failure",message: "Server error", error: err.message });
  }
};

// Login an existing user
const login = async (req, res) => {
  const { email, password } = req.body; // Login using email
  try {
    // Check if a user with the given email exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ status:"failure",message: "User not found" });

    // Compare provided and stored passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ status:"failure",message: "Invalid credentials" });

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      status: "success",
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const checkUser = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ status: "failure", message: "Email is required" });

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({ status: "success", exists: true });
    } else {
      return res.status(200).json({ status: "success", exists: false });
    }
  } catch (err) {
    res.status(500).json({ status: "failure", message: "Server error", error: err.message });
  }
};

module.exports = { register, login, checkUser };
