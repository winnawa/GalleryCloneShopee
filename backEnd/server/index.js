import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema.js";
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

const app = express();

app.use(cors())

//mongoose.connect("mongodb+srv://winnawa:namkhoapro2804@cluster0.8p7d3.mongodb.net/gallery?retryWrites=true&w=majority");
mongoose.connect("mongodb+srv://namkhoa:namkhoapro@cluster0.8p7d3.mongodb.net/gallery?retryWrites=true&w=majority");
mongoose.connection.once('open',()=>{
    console.log("connected to database");
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql : true,
}))

app.listen(4000,()=>{
    console.log("Hello I am listenning")
})