import { z } from "zod";

export const BookingSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Mobile must be 10 digits"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  guests: z.number().int().min(1).max(20),
  address: z.string().min(5, "Address must be at least 5 characters"),
  arrival: z.string().min(1, "Arrival date is required"),
  departure: z.string().min(1, "Departure date is required"),
});

export type BookingType = z.infer<typeof BookingSchema>;
