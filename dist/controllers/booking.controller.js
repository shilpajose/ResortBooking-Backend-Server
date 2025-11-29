"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBookings = exports.createBooking = void 0;
const booking_model_1 = __importDefault(require("../models/booking.model"));
const validator_1 = __importDefault(require("validator"));
// Create Booking
const createBooking = async (req, res) => {
    try {
        const raw = req.body;
        const data = {
            name: validator_1.default.escape(raw.name.trim()),
            email: validator_1.default.normalizeEmail(raw.email.trim()) || "",
            mobile: raw.mobile.trim(),
            arrival: raw.arrival,
            departure: raw.departure,
            guests: raw.guests,
            country: validator_1.default.escape(raw.country.trim()),
            state: validator_1.default.escape(raw.state.trim()),
            address: validator_1.default.escape(raw.address.trim()),
        };
        if (!validator_1.default.isEmail(data.email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }
        if (!validator_1.default.isMobilePhone(data.mobile, "en-IN")) {
            return res.status(400).json({ message: "Invalid mobile number" });
        }
        if (!validator_1.default.isDate(data.arrival) || !validator_1.default.isDate(data.departure)) {
            return res.status(400).json({ message: "Invalid date" });
        }
        if (new Date(data.arrival) > new Date(data.departure)) {
            return res.status(400).json({
                message: "Arrival date must be before departure",
            });
        }
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
// Get All Bookings
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
