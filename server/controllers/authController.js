const asyncHandler = require("../middleware/asyncHandler");
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../services/authService");

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

const getProfile = asyncHandler(async (req, res) => {
  const user = await getUserProfile(req.user._id);

  res.status(200).json({
    success: true,
    message: "Profile fetched successfully",
    data: user,
  });
});

module.exports = {
  register,
  login,
  getProfile,
};