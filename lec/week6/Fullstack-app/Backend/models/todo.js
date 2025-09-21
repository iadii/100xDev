const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.URI)
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50
    },
    description: {
        type: String,
        required: true,
        maxLength: 500
    },
    status: {
        type: String,
        enum: ['pending', 'progressing', 'completed'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const todo = mongoose.model('todos',todoSchema) 

module.exports =  todo