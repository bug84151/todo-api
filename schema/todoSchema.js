const mongoose = require("mongoose")
const { type } = require("os")
const todoSchema = mongoose.Schema({
    todo: { type: String, required: [true, "please enter a todo"] },
    isCompleted:{type:Boolean,}
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo