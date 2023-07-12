const {BadRequestError} = require("../errors")
const jwt = require('jsonwebtoken');




const login =  (req, res) => {
    const {username ,password}=req.body
    //1)check if username and password provided in the request body (login/register)
    if(!username || !password){ throw new BadRequestError("Please provide a username and password")}
    
    //2)if they provided create new JWT
        const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'30d'})


    //3)send it back to the fornt-end
    res.status(200).json({ msg : "User created successfully",token})


}

const dashboard = async (req, res) => {

    lukyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello , ${req.user.username} `,secret:`Here is your authraized data , your luky number is ${lukyNumber}`})


}

module.exports = {login, dashboard}