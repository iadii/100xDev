import { useEffect, useMemo, useState } from "react";

export default function Memoise() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  function inp(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
  }

  // THis is will cause too reRender
/*   // Calculate sum whenever input changes
  let total = 0;
  for(let i = 1; i <= Number(inputValue); i++){
    total += i;
  }
  setCount(total); */

  // we can solve it by useEffect or useMemo
  // useEffect:

  /* useEffect( ()=> {
  let total = 0;
    for(let i = 1; i <= Number(inputValue); i++){
      total += i;
    }
    setCount(total);
  },[inputValue]) */
  // whenever inputValue gets updated 
  // then only it should render

  // we are using this avoid extra computation

  let memoAdi = useMemo (() => {
    let total = 0;
    for(let i = 1; i <= Number(inputValue); i++){
      total += i;
    }
    setCount(total)
  }, [inputValue])

  // useMemo is better than useEffect here because:
  // 1. useMemo returns the computed value directly, making it easy to use in render without extra state.
  // 2. useMemo avoids unnecessary recalculations and re-renders, only recomputing when dependencies change.
  // 3. useEffect is for side effects, while useMemo is for memoizing expensive calculations.
  // 4. useMemo keeps your code cleaner and more declrative for pure computations.


  

  return (
    <>
      {/* take user input */} 
      <input 
          type="number" 
          placeholder="Enter a number" 
          onChange={inp} 
          value={inputValue} 
      />
      <br />
      <span>sum is {count}</span>
      {/* increase counter by 1*/}
      <br /> <br />
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
    </>
  );
}
