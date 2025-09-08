import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Message } from "./components/Message";

function App() {
  const [title, setTitle] = useState("Adii") 
  const [message, setMessage] = useState("Hii adii")
  function updateTitle(){
     setTitle( Math.floor(Math.random() * 10 + 1 ))
  }
  return (
    <div>
      <button onClick={updateTitle}>Click me to update the title</button>
      <br></br>
      <br></br>
      {/* <button onClick={() => { setMessage(Math.floor(Math.random() * 100 + 1 )) }}>click me to update message</button>
      <Message msg={`Message is ${message}`} /> */}
      <Header title={"Aditya"} />
      <Header title={"Adii"} />
      <Header title={"Ammy"} />
      <Header title={"iadii"} />
      {/* <Header title={title} /> */}
      <Header title={` My name is ${title}`} />
    </div>
  );
}
export default App;
  