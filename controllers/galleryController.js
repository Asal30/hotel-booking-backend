import GalleryItem from "../models/galleryItemModel.js";


export async function createGalleryItems(req, res) {
    const user = req.user;

    if (!user) {
        return res.status(401).json(
            { message: "Please login to add gallery items" }
        );
    }

    if (user.type !== "admin") {
        return res.status(403).json(
            { message: "Only admins can add gallery items" }
        );
    }

    try {
        const newGalleryItem = new GalleryItem(req.body);
        await newGalleryItem.save();
        res.json(
            { message: "Gallery item saved to database successfully" }
        );
    } catch (err) {
        res.status(500).json(
            { message: "Error saving gallery item to database", error: err.message }
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
            { message: "Error finding gallery items list", error: err.message }
        );
    }
}