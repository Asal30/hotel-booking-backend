import mongoose from "mongoose";

const bookingModel = mongoose.Schema(
    {
        bookingId : {
            type : Number,
            required : true,
            unique : true
        },
        roomId : {
            type : Number,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        status : {
            type : String,
            required : true,
            default : "Pending"
        },
        reason : {
            type : String,
            default : ""
        },
        timeStamp : {
            type : Date,
            default : Date.now
        },
        startDate : {
            type : Date,
            required : true
        },
        endDate : {
            type : Date,
            required : true
        },
        notes : {
            type : String,
            default : ""
        }
    }
)

const Booking = mongoose.model("booking", bookingModel);

export default Booking