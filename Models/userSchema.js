import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  userPassword: {
    type: String,
    required: true
  },
  userMobileNo: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Users", userSchema);