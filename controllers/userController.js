import User from '../models/userModel.js'

export function postUsers(req,res){

    const user = req.body

    const newUser = new User(user)
    newUser.save().then(
        ()=>{
            res.json({
                message : "User created successfully"
            })
        }
    ).catch(
        ()=>{
            res.status(500).json({
                message : "Error saving user to database"
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
                    message : "User not found"
                })
            }else{
                res.json({
                    message : "User logged in successfully"
                })
            }
        }
    )
}