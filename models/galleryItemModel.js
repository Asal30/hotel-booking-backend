import mongoose from "mongoose";

const galleryItemModel = mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        image : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        }
    }
)

const GalleryItem = mongoose.model("galleryItem", galleryItemModel)

export default GalleryItem;