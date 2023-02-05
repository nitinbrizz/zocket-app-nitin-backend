const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app  = express()

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin:"*",
})
);
app.use(taskRoutes);

//routes
app.get("/",(req,res)=>{
    res.send("landing page");
});



const PORT = process.env.PORT || 5000;
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            app.listen(PORT,()=>{
                console.log("server running");
            })
        })
        .catch((err)=>console.log(err))