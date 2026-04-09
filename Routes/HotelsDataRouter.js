import express from "express";
import hotels from "../Data/HotelsData.js";

const hotelsRouter = express.Router(); 


hotelsRouter.get("/hotels", (req, res) => {
  res.json(hotels);
});


hotelsRouter.post("/book-room", (req, res) => {
  const { hotelId } = req.body;

  const hotel = hotels.find(h => h.id === hotelId);

  if (!hotel) {
    return res.status(404).send("Hotel not found");
  }

  if (hotel.availableRooms > 0) {
    hotel.availableRooms--;
    res.send("Booking Confirmed ");
  } else {
    res.send("No Rooms Available ");
  }
});


hotelsRouter.post("/cancel-room", (req, res) => {
  const { hotelId } = req.body;

  const hotel = hotels.find(h => h.id === hotelId);

  if (!hotel) {
    return res.status(404).send("Hotel not found");
  }

  if (hotel.availableRooms < hotel.totalRooms) {
    hotel.availableRooms++;
    res.send("Booking Cancelled 🔄");
  } else {
    res.send("All rooms already free");
  }
});

export default hotelsRouter;