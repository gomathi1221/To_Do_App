const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    text:{
       type:String,
       require:true
    },
    status: {
  type: String,
  default: 'todo',
}
})
module.exports=mongoose.model('ToDo',todoSchema)