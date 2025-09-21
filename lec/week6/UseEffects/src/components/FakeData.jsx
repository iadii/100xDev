import { useEffect, useState } from "react";
import { Wrap } from "./Wrapper";

export function Fake() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    // fetch("https://dummyjson.com/quotes").then(async (res) => {
    fetch("https://poetrydb.org/lines/Love").then(async (res) => {
      const json = await res.json();
      setQuotes(json);
    });
  }, []);

  return (
    <div>
      {quotes.map((qt) => (
        <Wrap>
          {/* <div>{qt.id}</div> */}
          {/* <div>{qt.id}.)  {qt.quote} - {qt.author}</div> <br></br> */}
          {/* <div>{qt.author}</div> */}

          <div>title: {qt.title}</div>
          <div>author: {qt.author}</div>
          <div>poem: {qt.lines.map((line) => line)}</div>
          <br></br>
        </Wrap>
      ))}
    </div>
  );
}
