import express from 'express';
import { registerUser, loginUser, getAllUsers } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get("/", getAllUsers)

userRouter.post("/signup", registerUser)

userRouter.post("/login", loginUser)

export default userRouter;