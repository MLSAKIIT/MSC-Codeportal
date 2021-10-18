
const jwt = require('jsonwebtoken');

// Temporary secret:
const JWT_SECRET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

module.exports = (req,res,next)=>{
    try{
        const token = req.header('x-auth-token');
        jwt.verify(token, JWT_SECRET);
        next();
    }catch(error){
        const ERRORLOG={
            status : `Server Error {middleware/auth.js}`,
            message : error.message
        }
        console.table(ERRORLOG);
        res.status(401).json({
            message : `Auth Failed : Token not authorized`
        });
    }
}