"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBookings = exports.createBooking = void 0;
const booking_model_1 = __importDefault(require("../models/booking.model"));
const createBooking = async (req, res) => {
    try {
        const data = req.body;
        const newBooking = await booking_model_1.default.create({
            ...data,
            arrival: new Date(data.arrival),
            departure: new Date(data.departure),
        });
        return res.status(201).json({
            success: true,
            message: "Booking created successfully",
            booking: newBooking,
        });
    }
    catch (error) {
        console.error("Booking error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
exports.createBooking = createBooking;
const getAllBookings = async (req, res) => {
    try {
        const bookings = await booking_model_1.default.find().sort({ createdAt: -1 });
        return res.json({
            success: true,
            bookings,
        });
    }
    catch (error) {
        console.error("Fetch bookings error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
exports.getAllBookings = getAllBookings;
