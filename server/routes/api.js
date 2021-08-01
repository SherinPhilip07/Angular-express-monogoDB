const express=require('express')
const route= express.Router()
const mongoose=require('mongoose');
const User = require('../models/user');
const jwt=require('jsonwebtoken');


const db='mongodb+srv://dbUser:dbUser@cluster0.9e7ti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(db,{ useUnifiedTopology: true, useNewUrlParser: true}, err=>{
    if(err){
        console.log("Error"+err)
    }
    else{
        console.log("Connected")
    }
})
function Token(req,res,next){
    if(!req.headers.Authorization){
        return res.status(401).send('unauthorised req')
    }
    let token=req.headers.Authorization.split(' ')[1]
    if (token=='null'){
        return res.status(401).send('unauthorised req')       

    }
    let payload=jwt.verify(token,'secretkey')
    if(!payload){
        return res.status(401).send('unauthorised req')   
    }
    req.userId=payload.subject
    next()
}
route.get('/',(req,res) => 
{
    res.send('from api route')
})  

route.post('/register',(req,res)=>{
    let userData=req.body
    let user=new User(userData)
    user.save((error,registereduser)=>{
        if (error){
            console.log(error)
        }
            else
            {
                let payload={subject:registereduser._id}
                let token=jwt.sign(payload,'secretkey')
                res.status(200).send({token})
        
            }

        })
    
})

route.post('/login',(req,res)=>{
    let userData=req.body
    User.findOne({email:userData.email},(error,user)=>{
        if(error)
        {
            console.log(error)
        }
        else{
            if(!user){
                res.status(401).send('Invalid email')
            }
            else{
                if(user.password!==userData.password){
                    res.status(401).send('Invalid password')

                }
                else{

                }
                let payload={subject:user._id}
                let token=jwt.sign(payload,'secretkey')
                
                res.status(200).send({token})
                
            }
        }

    })
})

route.get('/events',(req,res)=>{
    let event=[{  
        "employee": {  
            "name":       "sonoo",   
            "salary":      56000,   
            "married":    true  
        }
    }]
    res.json(event)
})

route.get('/special',Token,(req,res)=>{
    let event=[{  
        "employee": {  
            "name":       "sonoo",   
            "salary":      56000,   
            "married":    true  
        
        }  
    }]
    res.json(event)
})

module.exports=route