import { useState } from "react";
import { Header } from "./Header";

export function HeaderwithButton() {
  const [title, setTitle] = useState("Adii");
  
  function updateTitle() {
    setTitle(Math.floor(Math.random() * 10 + 1));
  }

  return (
    <>
      <button onClick={updateTitle}>Click me to update the title</button>
      <Header title={title}/>
    </>
  );
}
