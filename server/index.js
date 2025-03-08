const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require("dotenv").config();
const connectDB = require("../server/config/db");
const userRoutes = require("../server/routes/auth.js");

const app=express();

app.use(cors);
app.use(express.json);

mongoose.connect("mongodb://localhost:27017/mern-todo")
        .then( console.log("connected to MONGODB"))
        .catch((err)=>{
            console.log(`Your error is ${err}`,err)
        })

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})