const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongo_URI)

const todosSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todosSchema) 

module.exports =  todo