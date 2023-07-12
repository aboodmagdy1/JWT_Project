const {UnauthenticatedError} = require('../errors')
const jwt = require('jsonwebtoken');



const authMiddleware = async (req, res, next) => {
    //1)check if there is token and get it 
    const authHeader = req.headers.authorization
    //               check the syntax ot the authorization header
    if(!authHeader ||!authHeader.startsWith("Bearer ")){throw new UnauthenticatedError("NO Token Provided")}
    let token = authHeader.split(" ")[1]

    try{
        const decoded =  jwt.verify(token,process.env.JWT_SECRET)
        const {username}=decoded
        req.user = {username}
        next()

    }catch(err){
        throw new UnauthenticatedError("Not authorized to access this route")
    }


}

module.exports = authMiddleware