import { useEffect, useState } from "react";
import axios from "axios";
import { Wrap } from "./Wrapper";
export function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://potterapi-fedeperin.vercel.app/en/books").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <h1>Harry Potter Books</h1>
      {data.map((book) => (
        <Wrap >
          <h3>{book.title}</h3>
          <img src={book.cover}></img>
          <div>{book.releaseDate}</div>
          <p>{book.description}</p>
        </Wrap>
      ))}
    </>
  );
}
