const mongoose = require("mongoose")

const taskSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required: [true,"don't leave the field empty"]
        },
        productName:{
            type:String,
            required: [true,"don't leave the field empty"]
        },
        url:{
            type:String,
            required: [true,"don't leave the field empty"]
        },
        platform:{
            type:String,
            required: [true],
            default:"google"
        },
        startDate:{
            type:String,
            required: [true]
        },
        status:{
            type:"string",
            default:"Live Now"
        },
        endDate:{
            type:String,
            required: [true]
        },
        budget:{
            type:String,
            required: [true,"don't leave the field empty"]
        },
        location:{
            type:String,
            required: [true,"don't leave the field empty"]
        },
        radius:{
            type:String,
            required: [true,"don't leave the field empty"]
        }
    },
    {
        timestamps: true
    }
)


const Task = mongoose.model("task",taskSchema)
module.exports = Task