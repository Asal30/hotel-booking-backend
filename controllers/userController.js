import User from '../models/userModel.js'

export function getUsers(req,res){
    User.find({}).then(
        
        (usersList)=>{
            res.json({
                list : usersList
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Error finding users list"
            })
        }
    )
}

export function postUsers(req,res){

    const user = req.body
    const newUser = new User(user)
    newUser.save().then(
        ()=>{
            res.json({
                message : "User data saved to database successfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Error saving user data to database"
            })
        }
    )

}

export function deleteUsers(req,res){

}