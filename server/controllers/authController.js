const asyncHandler = require("../middleware/asyncHandler");
const { registerUser, loginUser } = require("../services/authService");

const generateToken = require("../utils/generateToken");

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await registerUser({
    name,
    email,
    password,
  });

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: user,
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await loginUser({
    email,
    password,
  });

  const token = generateToken(user._id);

  res.status(200).json({
    success: true,
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

module.exports = {
  register,
  login,
};