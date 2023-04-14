const express=require('express');
const Connection = require('./config/db.connect');
const UserRouter = require('./routes/user.route');
const PostRouter = require('./routes/post.route');
require('dotenv').config()
const app=express()




app.use(express.json())
app.use("/user",UserRouter)
app.use("/post",PostRouter)




const PORT=8080;
app.listen(PORT,async()=>{
  try{
    await Connection()
  console.log(`server listening in ${PORT}`)
  }catch(err){
    return console.log(err)
}})