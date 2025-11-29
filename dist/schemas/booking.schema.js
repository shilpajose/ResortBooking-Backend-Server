"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingSchema = void 0;
const zod_1 = require("zod");
exports.BookingSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, "Name must be at least 3 characters"),
    email: zod_1.z.string().email("Invalid email format"),
    mobile: zod_1.z.string().regex(/^[0-9]{10}$/, "Mobile must be 10 digits"),
    country: zod_1.z.string().min(1, "Country is required"),
    state: zod_1.z.string().min(1, "State is required"),
    guests: zod_1.z.number().int().min(1).max(20),
    address: zod_1.z.string().min(5, "Address must be at least 5 characters"),
    arrival: zod_1.z.string().min(1, "Arrival date is required"),
    departure: zod_1.z.string().min(1, "Departure date is required"),
});
