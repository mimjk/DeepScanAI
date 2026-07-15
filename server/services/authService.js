const User = require("../models/User");

const registerUser = async ({ name, email, password }) => {
  // Check existing user
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Create user
  const user = await User.create({
    name,
    email,
    password,
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };
};

const loginUser = async ({ email, password }) => {
  // Email দিয়ে user খুঁজবে
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Password check
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  return user;
};

module.exports = {
  registerUser,
  loginUser,
};