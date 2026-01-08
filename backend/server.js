const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const uploadRoutes = require("./routes/uploadRoutes");

const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const testRoutes = require("./routes/testRoutes");

dotenv.config();
connectDB();
const app = express();

app.use(
  cors({
    origin: [
      "https://ex-dash-bz1o.vercel.app",
      "https://explore-front-z5vz.vercel.app",
    ], // frontend origin
    credentials: true, // allow cookies
  })
);
app.use(express.json());
app.use(cookieParser());
//app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// API Routes

app.use("/api/upload", uploadRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
api.use("/api", testRoutes);

const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
