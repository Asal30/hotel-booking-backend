import express from 'express';
import { addCategoryItem, getCategoryItems } from '../controllers/categoryController.js';

const categoryItemRouter = express.Router();

categoryItemRouter.post("/", addCategoryItem);
categoryItemRouter.get("/", getCategoryItems);

export default categoryItemRouter;