import GalleryItem from "../models/galleryItemModel.js";


export function postGalleryItems(req,res){

    const user = req.body.user;
    console.log(user);

    if(user == null){
        res.status(401).json({
            message : "Unauthorized"
        })
    }
    if(user.type != "admin"){
        res.status(401).json({
            message : "Only admins can add gallery items"
        })
    }
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