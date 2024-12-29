import GalleryItem from "../models/galleryItemModel.js";


export async function createGalleryItems(req, res) {
    try {
        const newGalleryItem = new GalleryItem(req.body);
        await newGalleryItem.save();
        res.json(
            { 
                message: "Gallery item saved to database successfully",
                data : newGalleryItem
            }
        );
    } catch (err) {
        res.status(500).json(
            { 
                message: "Error saving gallery item to database",
                error: err.message
            }
        );
    }
}

export async function getGalleryItems(req, res) { 
    try {
        const galleryItemsList = await GalleryItem.find({});
        res.json(
            { list: galleryItemsList }
        );
    } catch (err) {
        res.status(500).json(
            { 
                message: "Error finding gallery items list",
                error: err.message
            }
        );
    }
}