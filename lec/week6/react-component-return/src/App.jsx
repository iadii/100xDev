import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Message } from "./components/Message";
import { HeaderwithButton } from "./components/HeaderwithButton";
import { MessageButton } from "./components/MessagewithButton";

function App() {
  
  return (
    <div>
      <HeaderwithButton />
      <br></br>
      <MessageButton />
      <Header title={"Aditya"} />
      <Message msg={"Adii"} /> 
    </div>
  );
}
export default App;
  