import express from "express";
import { createBooking, getAllBookings } from "../controllers/booking.controller";
import validate from "../middleware/validate";
import { BookingSchema } from "../schemas/booking.schema";

const router = express.Router();

// Create new booking (POST)
router.post("/bookresort", validate(BookingSchema), createBooking);

// Get all bookings (GET)
router.get("/getresorts", getAllBookings);

export default router;
