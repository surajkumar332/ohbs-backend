import express from "express";
import Razorpay from "razorpay";

const PaymentRoute = express.Router();

const razorpay = new Razorpay({
  key_id: "rzp_test_Sa8NpukAaHGLLe",
  key_secret: "gijGdVJOmRUIQPnzJ9IeJUsp"
});

PaymentRoute.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount,
    currency: "INR",
    receipt: "receipt_order_1"
  };

  const order = await razorpay.orders.create(options);
  res.json(order);
});

export default PaymentRoute;