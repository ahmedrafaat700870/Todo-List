const {Schema , model} = require('mongoose')
const TodoSchema = new Schema({
    title: String , 
    isCompleted: Boolean
})
const Todo = new model('Todo',TodoSchema)
module.exports = Todo