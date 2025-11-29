"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const booking_routes_1 = __importDefault(require("./routes/booking.routes"));
require("../DB/connection");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// ⭐ FIX 1: Enable CORS
app.use((0, cors_1.default)({
    origin: [
      "http://localhost:5173",
      "https://resort-booking-front-end.vercel.app"
    ], // our React app
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
// ⭐ FIX 2: Parse JSON
app.use(express_1.default.json());
// Routing
app.use("/", booking_routes_1.default);
// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
