import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  console.log(count)
  console.log(setCount)

  function countIncreament(count){
    return count + 1
  }

  return (
    <div>
        <button onClick={() => setCount(countIncreament)}> counter {count}</button>
    </div>
  ) 
}

export default App