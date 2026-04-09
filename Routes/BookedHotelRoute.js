import express from "express";
import booking from "../Models/BookedHotelSchema.js";

const Booking = express.Router();

Booking.post("/Booking", async (req, res) => {
  try {
    const { hotelName, price, name, mobile, status } = req.body;
    const newBooking = new booking({ hotelName, price, name, mobile, status });
    await newBooking.save();

    res.status(201).json({ message: "booking save successfully", data: newBooking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

Booking.get("/Booking", async (req, res) => {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    const data = await booking.find(filter);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

Booking.put("/Booking/:id", async (req, res) => {
  try {
    const updated = await booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default Booking;