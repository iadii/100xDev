import { useState } from "react";
import "./App.css";
import { CardWrapper } from "./components/CardWrapper";
import { TextComponent } from "./components/TextComponent";
import { ParagraphComponent } from "./components/ParagraphComponent";
import { ChildrenWrapper } from "./components/ChildrenWrapper";


function App() {
  return (
    <>
      {/* Here inner component is different
         but wrapper component is same  */}
      <CardWrapper innerComponent={<TextComponent />} />
      <CardWrapper innerComponent={<ParagraphComponent />} />

{/* in real world we will write under component */}
{/* in this wrapper there is inbuilt property of react called children */}
{/* it will automatically calls whatever inside of that wrapper */}
      <ChildrenWrapper>
        hii there
      </ChildrenWrapper>
    </>
  );
}

export default App;
