import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")



    async function postdata() {
        fetch("http://localhost:4002/postTodo", {
                method: "POST",
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                title: title,
                description: description
                }),
            }).then(async (res) => {
                const json = await res.json();
                alert({
                    title, description
                });
            });
    }
  return (
    <div>
      <input type="text" placeholder="Title" onChange={(e) => {
            const value = e.target.value;
             setTitle(value)
        }
      } />
      <br />
      <input type="text" placeholder="Description" onChange={(e) => {
            const value = e.target.value;
             setDescription(value)
        }
      } />
      <br />  

      <button
        onClick={postdata}>
        Add a Todo
      </button>
    </div>
  );
}

