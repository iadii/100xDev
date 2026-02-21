import { useState } from 'react'
import { Count } from './components/Count'
import { Button } from './components/Buttons'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Count count={count}/>
      <Button count={count} setCount={setCount}/>
    </>
  )
}


export default App
