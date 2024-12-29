import express from 'express';
import { saveRoom, getRooms, updateRoom, deleteRoom, getRoomById } from '../controllers/roomController.js';
import { validateAdmin } from '../utilities/adminValidation.js';

const roomRouter = express.Router();

//GETS
roomRouter.get("/", getRooms);
roomRouter.get("/:roomId", getRoomById);

//POSTS
roomRouter.post("/", validateAdmin, saveRoom);

//UPDATES
roomRouter.put("/:roomId", validateAdmin, updateRoom);

//DELETES
roomRouter.delete("/:roomId", validateAdmin, deleteRoom);

export default roomRouter;