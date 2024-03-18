const express=require("express");
const  mongoose = require("mongoose");
const app=express();

mongoose.connect("mongodb://127.0.0.1:27017/Todolist");

const model=require("./models");
const body=require("body-parser");
app.use(body.json());
const cors=require("cors");
app.use(cors());

app.post("/post",(req,res)=>{
  model.create(req.body).then(()=>{
    console.log("data stored")
  }).catch((err)=>{console.log(err)})

})

app.get("/display",(req,res)=>{
    model.find({}).then((job)=>{
        res.send(job);
    }).catch((err)=>{console.log(err)})
})

app.put("/updatedata/:id", (req, res) => {
  const id = req.params.id;
  const { task } = req.body;
   model.findOneAndUpdate({_id:id},{task:task}).then(()=>{res.json("Task updated")}).catch((err)=>{console.log(err)});
 
});

app.delete("/delete/:id",(req,res)=>{
  const id=req.params.id;
  model.findOneAndDelete({_id:id}).then(()=>{res.json("Task deleted")}).catch(()=>{console.log(err)});
})


app.listen(5000,()=>{
    console.log("Server is starting");
})




