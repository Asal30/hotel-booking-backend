import mongoose from "mongoose";

const userModel = mongoose.Schema(
    {
        fName : {
            type : String,
            required : true
        },
        lName : {
            trype : String,
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        img : {
            type : String,
            default : "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
        },
        password : {
            type : String,
            required : true
        },
        contact : {
            type : Number
        }

    }
)

const User = mongoose.model("users", userModel)

export default User;