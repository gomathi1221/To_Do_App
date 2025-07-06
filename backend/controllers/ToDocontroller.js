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

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  console.log("Trying to delete ID:", _id); // 👀 check this
  ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
      console.error("Delete Error:", err);
      res.status(500).send("Delete failed");
    });
};
