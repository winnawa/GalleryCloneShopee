import mongoose from "mongoose";
const Schema = mongoose.Schema;

const drawSchema = new Schema({
    name: String, 
    artist: String, 
    year: Number
});

export let drawDef = mongoose.model('Draw', drawSchema,'draws');