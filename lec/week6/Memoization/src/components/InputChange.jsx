import { useEffect, useState } from "react";

export default function InputChange({ index }) {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [sum, setSum] = useState(0);

  function inp(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    // Calculate sum whenever input changes
    let total = 0;
    for(let i = 1; i <= Number(newValue); i++){
      total += i;
    }
    setSum(total);
  }

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
      <span>sum is {sum}</span>
      {/* increase counter by 1*/}
      <br /> <br />
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
    </>
  );
}
