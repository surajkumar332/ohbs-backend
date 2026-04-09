import mongoose from "mongoose";

const BookingHotelSchema = new mongoose.Schema({
  hotelName: String,
  price: Number,
  name: String,
  mobile: Number,
  status: {
    type: String,
    enum: ["pending", "paid"],
    default: "pending"
  }
});

const booking = mongoose.model("Booking", BookingHotelSchema);
export default booking;