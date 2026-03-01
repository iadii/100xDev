import { Router } from "express";
import { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo } from "../controllers/todos.controller.js";

const router = Router();

router.route("/").post(createTodo).get(getAllTodos);
router.route("/:id").get(getTodoById).put(updateTodo).delete(deleteTodo);

export default router;
