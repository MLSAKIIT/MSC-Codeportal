
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = require('../model/users');
const authorized = require('../middleware/auth');

// Temporary SECRET:
const JWT_SECRET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

// User Sign-In
router.post('/login', async(req,res,next)=>{
    try{
    let getUser;
    userSchema.findOne({
        email : req.body.email
    }).then(user=>{
        if(!user){
            return res.status(401).json({
                message : "Authentication Failed."
            });
        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then(_response=>{
        if(!_response){
            return res.status(401).json({
                message : "Authentication Failed"
            });
        }
        let jwtToken = jwt.sign({
            email : getUser.email,
            userId : getUser._id
        }, JWT_SECRET, {
            expiresIn: "2h",
        });
        res.status(200).json({
            token : jwtToken,
            expiresIn : 6600,
            msg : getUser
        })

    }).catch((err)=>{
            return res.status(401).json({
                message : "Authentication Failed",
                error : err.message
            });
        });
    }catch(error){
        console.log(`[*] Something Went Wrong {auth.route.js /login}`)
    }
})

// User Sign Up
router.post('/signup', async(req,res,next)=>{
    try{
    bcrypt.hash(req.body.password, 10).then((hash)=>{
        const user = new userSchema({
            name : req.body.name,
            email : req.body.email,
            password : hash
        })

        user.save().then(_response=>{
            res.status(201).json({
                message : "User Created",
                result : _response,
            })
            .catch((err)=>{
                res.status(500).json({
                    err
                })
            });
        })
        console.log(`[*] User Sign Up Complete.`);
    })
   }catch(error){
       console.error(`[*] Something went Wrong {auth.route.js /signup}`);
   }
})


// Test Middleware : 
router.get('/allusers', authorized, (req,res)=>{
     userSchema.find((err, _response)=>{
        if(err){
            return next(err);
        }
        res.status(200).json(_response);
    });
})

module.exports = router;