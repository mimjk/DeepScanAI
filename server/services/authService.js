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

module.exports = {
  registerUser,
};