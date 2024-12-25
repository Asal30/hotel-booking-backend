import mongoose from "mongoose";

const categoryItemModel = mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            unique : true
        },
        image : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        features : [
            {
                type : String
            }
        ]
    }
)

const CategoryItem = mongoose.model("categoryItem", categoryItemModel)

export default CategoryItem;