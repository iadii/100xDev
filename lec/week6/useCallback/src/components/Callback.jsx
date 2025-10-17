import { useState } from "react";

function Callback() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    </>
  );
}

export { Callback };
