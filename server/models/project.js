const mongoose=require('mongoose')
const projectSchema=new mongoose.Schema({
    fullname:String,
    email:String,
    password:String
})
const projectModel=mongoose.model("projects",projectSchema)
module.exports=projectModel