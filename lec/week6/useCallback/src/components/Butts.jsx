import { useState, useEffect } from "react";
import FetchData from "./FetchData"

function Butt() {

  const [click, setClick] = useState(0);


  function adii(event) {
    const value = Number(event.target.innerText);
    setClick(value);
  }

    return (
    <>
      <button onClick={adii}>1</button>
      <button onClick={adii}>2</button>
      <button onClick={adii}>3</button>
      <button onClick={adii}>4</button>
      click is {click}
      <FetchData index={click -1} />
    </>
  );

}


export default Butt;