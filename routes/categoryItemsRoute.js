import express from 'express';
import { addCategoryItem } from '../controllers/categoryController.js';

const categoryItemRouter = express.Router();

categoryItemRouter.post("/", addCategoryItem);

export default categoryItemRouter;