const mongoose = require("mongoose")


const picSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required: [true,"don't leave the field empty"]
        },
        url:{
            type:String,
            required:[true]
        }
    }
)

const Pic = mongoose.model("pic",picSchema)
module.exports = Pic