import { useState } from "react";
import { Message } from "./Message";

export function MessageButton() {
  const arr = [
    "Stars whisper your sweet name",
    "Moon paints silver on dreams",
    "Heart blooms in silent grace",
    "Soul dances with gentle breeze",
    "Time fades, love's echo stays", 
  ];
  const [msg, setMsg] = useState([]); 

  function updateMsg() {
    const randomIndex = Math.floor(Math.random() * arr.length);
    setMsg(arr[randomIndex]);
  }

  return(
    <>
        <button onClick={updateMsg}>Click me to update the Message</button>
        <Message msg={msg}/>
    </>
  )
}
