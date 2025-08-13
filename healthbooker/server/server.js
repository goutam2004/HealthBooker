const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const connectDB = require("../db/conn");

const userRouter = require("../routes/userRoutes");
const doctorRouter = require("../routes/doctorRoutes");
const appointRouter = require("../routes/appointRoutes");
const notificationRouter = require("../routes/notificationRouter");

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);

// Serve React build
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`🔗 Visit: http://localhost:${port}`);
});
