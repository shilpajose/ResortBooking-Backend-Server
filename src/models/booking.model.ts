import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
  name: string;
  email: string;
  mobile: string;
  country: string;
  state: string;
  guests: number;
  address: string;
  arrival: Date;
  departure: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    guests: { type: Number, required: true },
    address: { type: String, required: true },
    arrival: { type: Date, required: true },
    departure: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IBooking>("Booking", BookingSchema);
