import express from 'express';
import { getUsers, postUsers, deleteUsers } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get("/", getUsers)

userRouter.post("/", postUsers)

userRouter.delete("/", deleteUsers)

export default userRouter;