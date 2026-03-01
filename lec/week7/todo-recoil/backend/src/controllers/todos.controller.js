import mongoose from "mongoose";
import { Todo } from "../models/todo.models.js";

const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ success: false, message: "Title and description are required" });
        }
        
        const todo = await Todo.create({ title, description });
        return res.status(201).json({ success: true, data: todo });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error creating todo", error: error.message });
    }
}

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 });
        return res.status(200).json({ success: true, data: todos });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error fetching todos", error: error.message });
    }
}

const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }
        return res.status(200).json({ success: true, data: todo });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error fetching todo", error: error.message });
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, isCompleted } = req.body;
        
        const todo = await Todo.findByIdAndUpdate(
            id,
            { title, description, isCompleted },
            { new: true, runValidators: true }
        );
        
        if (!todo) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }
        return res.status(200).json({ success: true, data: todo });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error updating todo", error: error.message });
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        
        if (!todo) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }
        return res.status(200).json({ success: true, message: "Todo deleted successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error deleting todo", error: error.message });
    }
}

export {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo
}