const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Import Router
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/categories");
const productRouter = require("./routes/products");
const brainTreeRouter = require("./routes/braintree");
const orderRouter = require("./routes/orders");
const usersRouter = require("./routes/users");
const customizeRouter = require("./routes/customize");

// Import Auth middleware for check user login or not~
const { loginCheck } = require("./middleware/auth");

// Database Connection
connectDB();

// Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", authRouter);
app.use("/api/user", usersRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api", brainTreeRouter);
app.use("/api/order", orderRouter);
app.use("/api/customize", customizeRouter);

// Run Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
