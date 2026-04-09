import mongoose from "mongoose";

const SubsSchema = mongoose.Schema({
    email:{
        type: String,
        requireed: true,
        unique: true
    }
});

const Subscriber = mongoose.model("Subscriber", SubsSchema);

export default Subscriber;