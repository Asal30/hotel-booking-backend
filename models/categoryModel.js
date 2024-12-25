import mongoose from "mongoose";

const categoryItemModel = mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            unique : true
        },
        price : {
            type : Number,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        features : [
            {
                type : String
            }
        ],
        image : {
            type : String,
            required : true
        }
    }
)

const CategoryItem = mongoose.model("categoryItem", categoryItemModel)

export default CategoryItem;