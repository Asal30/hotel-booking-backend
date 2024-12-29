import express from 'express';
import { addCategoryItem, deleteCategoryItem, getCategoryItemByName, getCategoryItemByPrice, getCategoryItems, updateCategoryItem } from '../controllers/categoryController.js';
import { validateAdmin } from '../utilities/userValidation.js';

const categoryItemRouter = express.Router();

//GETS
categoryItemRouter.get("/", getCategoryItems);
categoryItemRouter.get("/searchbyprice/:price", getCategoryItemByPrice);
categoryItemRouter.get("/:name", getCategoryItemByName);

//POSTS
categoryItemRouter.post("/", validateAdmin, addCategoryItem);

//UPDATES
categoryItemRouter.put("/:name", validateAdmin, updateCategoryItem);

//DELETES
categoryItemRouter.delete("/:name", validateAdmin, deleteCategoryItem);

export default categoryItemRouter;