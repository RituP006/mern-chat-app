const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log("Server is running"));
