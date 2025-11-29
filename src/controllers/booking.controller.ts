import { Request, Response } from "express";
import Booking from "../models/booking.model";
import { BookingType } from "../schemas/booking.schema";
import validator from "validator";

// Create Booking
export const createBooking = async (req: Request, res: Response) => {
  try {
    const raw: BookingType = req.body;

    const data = {
      name: validator.escape(raw.name.trim()),
      email: validator.normalizeEmail(raw.email.trim()) || "",
      mobile: raw.mobile.trim(),
      arrival: raw.arrival,
      departure: raw.departure,
      guests: raw.guests,
      country: validator.escape(raw.country.trim()),
      state: validator.escape(raw.state.trim()),
      address: validator.escape(raw.address.trim()),
    };


    if (!validator.isEmail(data.email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (!validator.isMobilePhone(data.mobile, "en-IN")) {
      return res.status(400).json({ message: "Invalid mobile number" });
    }

    if (!validator.isDate(data.arrival) || !validator.isDate(data.departure)) {
      return res.status(400).json({ message: "Invalid date" });
    }

    if (new Date(data.arrival) > new Date(data.departure)) {
      return res.status(400).json({
        message: "Arrival date must be before departure",
      });
    }

    const newBooking = await Booking.create({
      ...data,
      arrival: new Date(data.arrival),
      departure: new Date(data.departure),
    });

    return res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking: newBooking,
    });
  } catch (error: any) {
    console.error("Booking error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get All Bookings
export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    return res.json({
      success: true,
      bookings,
    });
  } catch (error: any) {
    console.error("Fetch bookings error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
