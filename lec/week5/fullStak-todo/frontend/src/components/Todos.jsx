export function Todo({ todos }) {
    return (
        <div>
      {todos.map((todo)=> {
        return(
            <div key={todo.id}>
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>

                <button>{todo.completed == true? "completed" : "mark as completed"}</button>
            </div>
            )
      })}
        </div>
    );
}


// how todos will look like 
/* 
todos = [
    {
        title : ""
        description: ""
        
    }
]
 */