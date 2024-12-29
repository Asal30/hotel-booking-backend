import mongoose from "mongoose";

const roomModel = mongoose.Schema(
    {
        roomId : {
            type : Number,
            required : true,
            unique : true
        },
        category : {
            type : String,
            required : true
        },
        maxGuests : {
            type : Number,
            required : true,
            default : 3
        },
        available : {
            type : Boolean,
            required : true,
            default : true
        },
        images : [
            {
                type : String
            }
        ],
        specialDescription : {
            type : String,
            default : ""
        },
        notes : {
            type : String,
            default : ""
        }
    }
)

const Room = mongoose.model("room", roomModel)

export default Room