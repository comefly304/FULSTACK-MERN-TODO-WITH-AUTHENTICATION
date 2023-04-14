const UserRouter=require('express').Router()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const User=require('../models/user.model')


//create
UserRouter.post("/register",async(req,res)=>{
    try{
         const{username,email,password}=req.body
            
         const hash=await bcrypt.hash(password,10)
         const user=await User.findOne({email})
         if(user){
            return res.send("user already exists")
         }else{
            const newuser=new User({
                username,
                email,
                password:hash
            })
            await newuser.save()
            return res.json({
                msg:"registred successfully...,please login",
                data:newuser
            })
         }
    }catch(err){

    }
})



//login
UserRouter.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body
      
        const user=await User.findOne({email})
        bcrypt.compare(password,user.password,function(err,result){
            if(err){
                return res.send(err)
            } if(result){
                const token=jwt.sign({userId:user._id},process.env.JWT_SECRET)
                return res.json({
                    msg:'login successful...',
                    data:user,
                    token:token
                })
            }
        })
    }catch(err){
        return res.send(err)
    }
})

//get
UserRouter.get("/get",async(req,res)=>{
    const user=await User.find()
    return res.send(user)
})

module.exports=UserRouter


