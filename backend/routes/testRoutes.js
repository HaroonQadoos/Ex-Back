const express = require("express");
const router = express.Router();
const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
router.get("/test-cloudinary", async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(
      "https://res.cloudinary.com/demo/image/upload/sample.jpg"
    );
    res.json({ success: true, result });
  } catch (err) {
    console.error("Cloudinary test error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
