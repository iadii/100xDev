import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count1, adii] = useState(0)

  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
            counter is {count}
        </button>
        
        <button onClick={() => adii(function (count1) {
          return count1 + 1
        })}> 
            counter is {count1}
        </button>
    </>
  )
} 

export default App
