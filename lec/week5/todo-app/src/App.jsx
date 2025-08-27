import { useState } from "react";
import "./App.css";

/* 
  global state would look like 
  {
  todos : [{
    title: "",
    description: "",
    completed: true/false
  }]
  }
 */

  // any time parent gets re-render all of its children gets re -rendered
function App() {
  const [todos, setTodos] = useState([
    {
      title: "DSA",
      description: "Study DSA",
      completed: false,
    },
    {
      title: "DEV",
      description: "Study Web Development",
      completed: true,
    },
  ]);

  function addtodos(){
    setTodos([...todos, {
      title : "new todo",
      description: "new desc"
    }])
  }

  return (
    <>
      {/* <Todo title={todos[0].title} description={todos[0].description} completed={todos[0].completed} />
      <Todo title={todos[1].title} description={todos[1].description} completed={todos[1].completed} /> */}
      <button onClick={addtodos}>add new todo</button>
      {/* using loop */}
      {todos.map((todo) => {
        return <Todo
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
        />;
      })}
    </>
  );
}


function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      {props.completed === true ? "done" : "not done"}
    </div>
  );
}

export default App;
