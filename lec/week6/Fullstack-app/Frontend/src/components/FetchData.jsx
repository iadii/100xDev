import { useEffect, useState } from "react";
import { Wrap } from "./Wrapper";

export function Fetch(){
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/todos')
        .then(async (res) => {
            const json = await res.json();
            setTodos(json.todos)
        })
    },[])

    return(
        <div>
            {todos.map((todo, index) => (
                <Wrap key={index}>
                    {/* <div>{todo.title}</div>
                    <div>{todo.description}</div>
                    <div>{todo.status}</div> */}
                    <div>{index+1}) {todo.title}</div>
                    <div>Description: {todo.description}</div>
                    <div>Status: {todo.status}</div> <br/>
                </Wrap>
            ))}
        </div>
    )
}