const asyncHandler = require("../middleware/asyncHandler");
const { uploadImage } = require("../services/uploadService");

const upload = asyncHandler(async (req, res) => {
  const result = await uploadImage(req.file, req.user);

  res.status(201).json({
    success: true,
    message: "Image uploaded successfully",
    data: result,
  });
});

module.exports = {
  upload,
};