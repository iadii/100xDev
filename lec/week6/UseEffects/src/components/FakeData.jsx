import { useEffect, useState } from "react";
import { Wrap } from "./Wrapper";

export function Fake() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/quotes").then(async (res) => {
      const json = await res.json();
      setQuotes(json.quotes);
    });
  }, []);

  return (
    <div>
      {quotes.map((qt) => (
        <Wrap>
          {/* <div>{qt.id}</div> */}
          <div>{qt.id}.)  {qt.quote} - {qt.author}</div> <br></br>
          {/* <div>{qt.author}</div> */}
        </Wrap>
      ))}
    </div>
  );
}
