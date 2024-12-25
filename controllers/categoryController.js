import CategoryItem from "../models/categoryModel.js";


export async function addCategoryItem(req, res) {
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