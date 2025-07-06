const ToDoModel=require('../models/ToDoModel')
module.exports.getToDo=async(req,res)=>{
    const todo=await ToDoModel.find()
    res.send(todo)
}

module.exports.saveToDo=async(req,res)=>{

    const{text}=req.body
    ToDoModel
    .create({text})
    .then((data)=>{
        console.log("Added succcessfully....")
        console.log(data);
        res.send(data)
    })
   
}
module.exports.updateToDo = async (req, res) => {
  const { _id, text, status } = req.body;
  ToDoModel
    .findByIdAndUpdate(_id, { text, status })
    .then(() => res.send("updated successfully...."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo=async(req,res)=>{
    const {_id}=req.body
    ToDoModel
    .findByIdAndUpdate(_id)
    .then(()=>res.send("deleted successfully...."))
    .catch((err)=> console.log(err))
}
