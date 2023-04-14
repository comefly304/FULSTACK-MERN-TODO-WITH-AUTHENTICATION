const mongoose=require('mongoose')

function Connection(){
    mongoose.connect('mongodb+srv://MERN-TODO-14-04:1234@cluster0.a0xsfec.mongodb.net/?retryWrites=true&w=majority')
    console.log('mongodb connected...')
}

module.exports=Connection