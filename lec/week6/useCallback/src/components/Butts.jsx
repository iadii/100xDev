import { useState, useEffect } from "react";
import FetchData from "./FetchData"

function Butt({children, onClick}) {

  const [data, setData] = useState(0);


  function adii(event) {
    const value = Number(event.target.innerText);
    setData(value);
  }

    return (
    <>
      <button onClick={adii}>1</button>
      <button onClick={adii}>2</button>
      <button onClick={adii}>3</button>
      <button onClick={adii}>4</button>
      <FetchData index={data} />
    </>
  );

}


export default Butt;