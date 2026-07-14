const asyncHandler = require("../middleware/asyncHandler");
const { registerUser } = require("../services/authService");

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

module.exports = {
  register,
};