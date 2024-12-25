import CategoryItem from "../models/categoryModel.js";


export async function addCategoryItem(req, res) {
    const user = req.user;

    if (!user) {
        return res.status(401).json(
            { message: "Please login to add category items" }
        );
    }

    if (user.type !== "admin") {
        return res.status(403).json(
            { message: "Only admins can add category items" }
        );
    }
    try {
        const newCategoryItem = new CategoryItem(req.body);
        await newCategoryItem.save();
        res.json(
            { message: "Category item saved to database successfully" }
        );
    } catch (err) {
        res.status(500).json(
            { message: "Error saving category item to database", error: err.message }
        );
    }
}

export async function getCategoryItems(req, res) {
    try {
        const categoryItemsList = await CategoryItem.find({});
        res.json(
            { list: categoryItemsList }
        );
    } catch (err) {
        res.status(500).json(
            { message: "Error finding category items list", error: err.message }
        );
    }
}