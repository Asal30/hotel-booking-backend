import bodyParser from 'body-parser';
import express from 'express';
import userRouter from './routes/usersRoute.js';
import mongoose from 'mongoose';
import galleryItemRouter from './routes/galleryItemRoute.js';
import jwt from 'jsonwebtoken';
import categoryItemRouter from './routes/categoryItemsRoute.js';
import dotenv from 'dotenv';
import roomRouter from './routes/roomRoute.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());

const database = process.env.DATABASE_URL;

app.use((req, res, next) => {

    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (token != null) {
        jwt.verify(token, process.env.JWT_KEY, (err, decded) => {
            if(decded != null){
                req.user = decded;
                next();
            }else{
                res.status(401).json({
                    message : "Invalid token"
                })
            }
        });
    }else{
        next();
    }
});

mongoose.connect(database).then(
    ()=>{
        console.log("Connected to the Database")
    }
).catch(
    ()=>{
        console.log("Couldn't connected to the Database")
    }
)

app.use("/api/users", userRouter)
app.use("/api/galleryItems", galleryItemRouter)
app.use("/api/categoryItems", categoryItemRouter)
app.use("/api/rooms", roomRouter)

app.listen(4200,(req,res) =>{
    console.log("Server is running on http://localhost:4200/");
});