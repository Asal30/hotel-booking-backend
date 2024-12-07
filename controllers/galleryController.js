import GalleryItem from "../models/galleryItemModel.js";


export function postGalleryItems(req,res){
    const galleryItem = req.body;
    const newGalleryItem = new GalleryItem(galleryItem);
    newGalleryItem.save().then(
        () => {
            res.json({
                message : "Gallery item saved to database successfully"
            })
        }
    ).catch(
        () => {
            res.status(500).json({
                message : "Error saving gallery item to database"
            })
        }
    )
}
export function getGalleryItems(req,res){
    GalleryItem.find({}).then(
        (galleryItemsList) => {
            res.json({
                list : galleryItemsList
            })
        }
    ).catch(
        () => {
            res.status(500).json({
                message : "Error finding gallery items list"
            })
        }
    )
}