import express from 'express';
import { addCategoryItem, deleteCategoryItem, getCategoryItemByName, getCategoryItemByPrice, getCategoryItems } from '../controllers/categoryController.js';

const categoryItemRouter = express.Router();

//GETS
categoryItemRouter.get("/", getCategoryItems);
categoryItemRouter.get("/searchbyprice/:price", getCategoryItemByPrice);
categoryItemRouter.get("/:name", getCategoryItemByName);

//POSTS
categoryItemRouter.post("/", addCategoryItem);

//DELETES
categoryItemRouter.delete("/:name", deleteCategoryItem);

export default categoryItemRouter;