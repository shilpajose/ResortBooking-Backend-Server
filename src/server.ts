import express from "express";
import bookingRoutes from "./routes/booking.routes";
import "../DB/connection";
import cors from "cors";

const app = express();

// ⭐ FIX 1: Enable CORS
app.use(
  cors({
    origin: "https://resort-booking-front-end.vercel.app", // our React app FE
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// ⭐ FIX 2: Parse JSON
app.use(express.json());

// Routing
app.use("/", bookingRoutes);

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
