const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://pratiktalekarpatil:Manjusha8122004@cluster0.ouh1jis.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo : todo
}