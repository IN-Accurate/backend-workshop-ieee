const express = require("express");
const mongoose = require("mongoose");
const app = express();
const url = "mongodb+srv://admin:admin@cluster0.xwghn2u.mongodb.net/";

mongoose.connect(url);
mongoose.connection.once("open", ()=> {
    console.log("connected");
})

const userRouter = require("./routes/Auth");    
app.use("/user",userRouter);


app.listen("3001",()=> {    //port
    
});
