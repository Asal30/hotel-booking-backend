import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'

export function registerUser(req,res){

    const user = req.body

    const newUser = new User(user)
    newUser.save().then(
        ()=>{
            res.json({
                message : "User registered successfully"
            })
        }
    ).catch(
        ()=>{
            res.status(500).json({
                message : "Error creating user account"
            })
        }
    )

}
export function loginUser(req,res){
    const credentials = req.body
    User.findOne({email : credentials.email, password : credentials.password}).then(
        (response)=>{
            if(response == null){
                res.status(404).json({
                    message : "Invalid email or password"
                })
            }else{
                const payload = {
                    id : response._id,
                    email : response.email,
                    password : response.password,
                    type : response.type,
                    firstName : response.firstName,
                    lastName : response.lastName,
                };
                const token = jwt.sign(payload, "secretKey");
                res.json({
                    message : "User logged in successfully",
                    token : token
                })
            }
        }
    )
}