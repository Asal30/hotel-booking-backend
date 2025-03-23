import mongoose from "mongoose";

const userModel = mongoose.Schema(
    {
        firstName : {
            type : String,
            required : true
        },
        lastName : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true
        },
        type : {
            type : String,
            required : true,
            default : "customer"
        },
        whatsApp : {
            type : String,
            required : true
        },
        phone : {
            type : String,
            required : true
        },
        isDisabled : {
            type : Boolean,
            required : true,
            default : false
        },
        isEmailVerified : {
            type : Boolean,
            required : true,
            default : false
        }
    }
)

const User = mongoose.model("users", userModel)

export default User;