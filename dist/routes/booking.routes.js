"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const booking_controller_1 = require("../controllers/booking.controller");
const validate_1 = __importDefault(require("../middleware/validate"));
const booking_schema_1 = require("../schemas/booking.schema");
const router = express_1.default.Router();
// Create new booking (POST)
router.post("/bookresort", (0, validate_1.default)(booking_schema_1.BookingSchema), booking_controller_1.createBooking);
// Get all bookings (GET)
router.get("/getresorts", booking_controller_1.getAllBookings);
exports.default = router;
