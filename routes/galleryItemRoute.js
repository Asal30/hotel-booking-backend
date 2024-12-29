import express from 'express';
import { createGalleryItems, getGalleryItems } from '../controllers/galleryController.js';
import { validateAdmin } from '../utilities/adminValidation.js';

const galleryItemRouter = express.Router();

galleryItemRouter.post("/", validateAdmin, createGalleryItems);

galleryItemRouter.get("/", getGalleryItems);

export default galleryItemRouter;