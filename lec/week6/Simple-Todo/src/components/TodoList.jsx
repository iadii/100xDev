import { useState } from "react";
import { Todo } from "./Todo";

export function TodoList() {
  const [todo, setTodo] = useState([
    {
      title: "DSA",
      description: "Not Done",
    },
    {
      title: "NV",
      description: "planning to go",
    },
  ]);

  return (
    <>
      {todo.map((item) => (
        <Todo title={item.title} description={item.description} />
      ))} 
    </>
  );
}


function addTodoLists(){
     
}