import mongoose from "mongoose";
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name : String,
    birth : String,
    country : String
});

export let artistDef = mongoose.model('Artist', artistSchema, 'artists');