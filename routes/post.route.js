const PostRouter=require('express').Router()
const Post=require('../models/post.model')


//create
PostRouter.post("/create",async(req,res)=>{
    try{
         const{title}=req.body
        
            const newpost=new Post({
               title
            })
            await newpost.save()
            return res.json({
                msg:"post created successfully...,",
                data:newpost
            })
         } catch(err){
    return res.send(err)
    }
})


//get
PostRouter.get("/get",async(req,res)=>{
    const post=await Post.find()
    return res.send(post)
})


//update 
PostRouter.put("/update/:id",async(req,res)=>{
    try{
       const {id}=req.params
       const updatedpost=await Post.findByIdAndUpdate(id,{
        $set:req.body
       },{new:true})
       return res.json({
        msg:"updated....",
        data:updatedpost
       })
    }catch(err){
        return res.send(err)
    }
})


//delete 
PostRouter.delete("/delete/:id",async(req,res)=>{
    try{
       const {id}=req.params
       await Post.findByIdAndDelete(id)
       return res.json({
        msg:"deleted....",
       
       })
    }catch(err){
        return res.send(err)
    }
})





module.exports=PostRouter


