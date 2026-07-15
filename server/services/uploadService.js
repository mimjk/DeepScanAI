const uploadImage = async (file, user) => {
  if (!file) {
    throw new Error("No image uploaded");
  }

  return {
    fileName: file.filename,
    originalName: file.originalname,
    imagePath: file.path,
    uploadedBy: user._id,
    uploadedAt: new Date(),
  };
};

module.exports = {
  uploadImage,
};