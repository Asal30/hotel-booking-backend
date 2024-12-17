import bodyParser from 'body-parser';
import express from 'express';
import userRouter from './routes/usersRoute.js';
import mongoose from 'mongoose';
import galleryItemRouter from './routes/galleryItemRoute.js';
import jwt from 'jsonwebtoken';

const app = express();

app.use(bodyParser.json());

const database = "mongodb+srv://Asal:1234@cluster0.be57l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use((req, res, next) => {

    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (token != null) {
        jwt.verify(token, "secretKey", (err, decded) => {
            if(decded != null){
                req.user = decded;
                console.log(decded);
                next();
            }
        });
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

app.listen(4200,(req,res) =>{
    console.log("Server is running on http://localhost:4200/");
});