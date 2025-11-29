import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("MongoDB connection string is missing in .env file");
}

mongoose
  .connect(uri)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Connection failed", err));
