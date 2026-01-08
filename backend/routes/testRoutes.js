const express = require("express");
const router = express.Router();
const cloudinary = require("../config/cloudinary");

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
