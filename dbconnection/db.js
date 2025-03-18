const mongoose = require("mongoose");
require("dotenv").config(); 

const connectDB = async () => {
  try {
    const dbURI = process.env.Connection_URL; 
    console.log("MongoDB URI:", dbURI);

    if (!dbURI) {
      throw new Error("MongoDB URL is not defined in the environment variables.");
    }

    await mongoose.connect(dbURI);
    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
