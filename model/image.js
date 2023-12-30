const mongoose=require('mongoose')

const ImageSchema=new mongoose.Schema({

    description:{type:String,require:true},
    image:{type:String, required:true},

})

module.exports=mongoose.model('product',ImageSchema);