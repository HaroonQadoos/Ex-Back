const express = require("express");
const { uploadImage } = require("../controllers/uploadController"); // fixed typo

const router = express.Router();

router.post("/", uploadImage); // Works because uploadImage is an array of middleware

module.exports = router; // CommonJS export
