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