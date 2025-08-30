import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodos'
import { Todo } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  // this sending way too much request to db
  // so this is very wrong way (it is sort of infinite loop)
  // so we should useEffect hook
  fetch('http://localhost:4002/todos')
  .then(async (res) => {
      const json = await res.json(); 
      setTodos(json.todos)
  })  
  return (
    <div>
          <CreateTodo />
          <Todo todos={todos}/>
    </div> 
  ) 
}

export default App
