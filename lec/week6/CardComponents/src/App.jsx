import { useState } from "react";
import "./App.css";
import { CardWrapper } from "./components/CardWrapper";
import { TextComponent } from "./components/TextComponent";
import { ParagraphComponent } from "./components/ParagraphComponent";

function App() {
  return (
    <>
      {/* Here inner component is different
         but wrapper component is same  */}
      <CardWrapper innerComponent={<TextComponent />} />
      <CardWrapper innerComponent={<ParagraphComponent />} />
    </>
  );
}

export default App;
