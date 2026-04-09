import express from "express";
import Subscriber from "../Models/SubsSchema.js";

const SubsRoute  = express.Router();

SubsRoute.post("/FooterForm", async(req, res)=> {
    try{
    const {email} = req.body;
    
    if(!email){
        return res.status(400).json({message: "Email Required"});
    }
    const exists = await Subscriber.findOne({email});

    if(exists){
        return res.status(400).json({message: "Email already Subscribe"});
    }
    const newUser = new Subscriber({email});
    await newUser.save();
    res.status(200).json({message: "added user email for latest updates"});
    }
    catch{
        res.status(500).json({ message: "Server error" });
    }
});
// subscribe

SubsRoute.post("/subscribe", async(req, res)=> {
    try{
    const {email} = req.body;
    
    if(!email){
        return res.status(400).json({message: "Email Required"});
    }
    const exists = await Subscriber.findOne({email});

    if(exists){
        return res.status(400).json({message: "Email already Subscribe"});
    }
    const newUser = new Subscriber({email});
    await newUser.save();
    res.status(200).json({message: "added user email for latest updates"});
    }
    catch{
        res.status(500).json({ message: "Server error" });
    }
});

export default SubsRoute;