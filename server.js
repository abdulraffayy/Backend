const express = require("express");
const connectDB = require("./dbconnection/db");
connectDB();

const router = require("./routes/userRoutes");

const app = express();

// Middleware to parse JSON
app.use(express.json());  

// Routes
app.use("/api", router);  

app.get("/", (req, res) => {
    res.send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
