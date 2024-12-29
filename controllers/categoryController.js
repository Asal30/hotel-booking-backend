import CategoryItem from "../models/categoryModel.js";

//GETS
export async function getCategoryItems(req, res) {
    try {
        const categoryItemsList = await CategoryItem.find({});
        res.json(
            { list: categoryItemsList }
        );
    } catch (err) {
        res.status(500).json(
            { 
                message: "Error finding category items list",
                error: err.message
            }
        );
    }
}

export async function getCategoryItemByName(req, res) {
    try {
        const categoryItem = await CategoryItem.findOne({ name: req.params.name });
        if (!categoryItem) {
            return res.status(404).json(
                { message: "Category item '" + req.params.name + "' not found" }
            );
        } else {
            res.json({ data : categoryItem});
        }
    } catch (err) {
        res.status(500).json(
            { 
                message: "Error finding category item by name",
                error: err.message
            }
        );
    }
}

export async function getCategoryItemByPrice(req, res) {
    try {
        const categoryItem = await CategoryItem.findOne({ price: req.params.price });
        if (!categoryItem) {
            return res.status(404).json(
                { message: "Category item with price '" + req.params.price + "' not found" }
            );
        } else {
            res.json({ data : categoryItem});
        }
    } catch (err) {
        res.status(500).json(
            { 
                message: "Error finding category item by price",
                error: err.message
            }
        );
    }
}

//POSTS
export async function addCategoryItem(req, res) {
    try {
        const newCategoryItem = new CategoryItem(req.body);
        await newCategoryItem.save();
        res.json(
            { 
                message: "Category item saved to database successfully",
                data : newCategoryItem
            }
        );
    } catch (err) {
        res.status(500).json(
            { 
                message: "Error saving category item to database",
                error: err.message
            }
        );
    }
}

//DELETES
export async function deleteCategoryItem(req, res) {
    try {
        const deletedItem =await CategoryItem.findOneAndDelete({ name: req.params.name });
        res.json(
            {
                message: "Category item '" + deletedItem.name + "' deleted successfully"
            }
        )
    } catch (err) {
        res.status(500).json(
            {
                message: "Error deleting category item",
                error: err.message
            }
        );
    }
}

//UPDATES
export async function updateCategoryItem(req, res) {
    try {
        const updatedItem = await CategoryItem.findOneAndUpdate({ name: req.params.name }, req.body, { new: true });
        res.json(
            {
                message: "Category item '" + updatedItem.name + "' updated successfully",
                data : updatedItem
            }
        )
    } catch (err) {
        res.status(500).json(
            {
                message: "Error updating category item",
                error: err.message
            }
        );
    }
}