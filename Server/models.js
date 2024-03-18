const { default: mongoose } = require("mongoose")

const schema=new mongoose.Schema({
    task:String
},{collection:"jobs"});

const model=mongoose.model("jobs",schema);
module.exports=model;

