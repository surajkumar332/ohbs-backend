import express from "express";
import cors from "cors";
import connectDb from "./config/Db.js"; 
import userRoute from "./Routes/userRoute.js";
import verifyToken from "./Middleware/auth.js";
import hotels from "./Data/HotelsData.js";
import hotelsRouter from "./Routes/HotelsDataRouter.js";
import PaymentRoute from "./Routes/PaymentRoute.js";
import SubsRoute from "./Routes/SubsRoute.js"
import Booking from "./Routes/BookedHotelRoute.js";
import dotenv from "dotenv";

// read for .env
dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

// Db connect
connectDb();

const PORT = process.env.PORT || 3000;


app.use("/", userRoute);
app.use("/hotels", hotelsRouter);
app.use("/payment", PaymentRoute);
app.use("/", SubsRoute);
app.use("/", Booking)

app.get("/", verifyToken, (req, res)=> {
    res.json({message: "welcome to home page", user : req.user});
});

// hotels data 
app.get("/HotelsData", async(req, res)=> {
    res.json(hotels);
});



app.get("/", (req, res)=> {
    res.send("server is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});