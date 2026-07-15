const express = require("express");

const { upload } = require("../controllers/uploadController");

const { protect } = require("../middleware/authMiddleware");

const uploadMiddleware = require("../config/multer");

const router = express.Router();

router.post(
  "/",
  protect,
  uploadMiddleware.single("image"),
  upload
);

module.exports = router;