import { useState } from "react";
import { Todo } from "./Todo";

export function TodoList() {
  const [todo, setTodo] = useState([
    {
      title: "DSA",
      description: "Not Done",
      isDone: "true",
    },
    {
      title: "NV", 
      description: "planning to go",
      isDone: "false",
    },
  ]);

  function addTodo() {
    setTodo([
      ...todo,
      {
        title: "Charlie anna",
        description: "cuteey",
        isDone: "false",
      },
    ]);
  }
  return (
    <>
      {todo.map((item, index) => (
        <Todo
          // Each child in a list should have a unique "key" prop.
          // so thats why Key
          key={index} 
          title={item.title}
          description={item.description}
          isDone={item.isDone}
        />
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
}
