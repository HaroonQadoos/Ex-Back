import express from "express";
import uploadImage from "../controllers/uploadController.js";

const router = express.Router();

router.post("/", uploadImage); // Works because uploadImage is an array of middleware

export default router;
