import { useState } from "react";
import "./App.css";
import { CardWrapper } from "./components/CardWrapper";
import { TextComponent } from "./components/TextComponent";

function App() {

  return (
  <>
    <CardWrapper innerComponent={<TextComponent />}/>
  </>
  )
}

export default App;
