"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingSchema = void 0;
const zod_1 = require("zod");
exports.BookingSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, "Name must be at least 3 characters"),
    email: zod_1.z.string().email("Invalid email format"),
    mobile: zod_1.z.string().regex(/^[0-9]{10}$/, "Mobile must be 10 digits"),
    country: zod_1.z.string().min(2),
    state: zod_1.z.string().min(2),
    guests: zod_1.z.number().min(1).max(20),
    address: zod_1.z.string().min(10),
    arrival: zod_1.z.string(),
    departure: zod_1.z.string(),
});
