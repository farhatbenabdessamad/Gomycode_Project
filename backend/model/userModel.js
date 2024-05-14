const mongoose=require("mongoose")
const user_schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    status:String,
    phone:Number,
    budget:{type:[{donor:String,transaction:String,amount:Number}],default:[]} ,
    projects:{type:[{project:{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }}],default:[]},
    role:{type:String,default:'user'}  
})
module.exports=mongoose.model("users",user_schema)