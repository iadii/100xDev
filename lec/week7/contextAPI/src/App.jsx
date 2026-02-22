import { useState } from 'react'
import { Count } from './components/Count'
import { Button } from './components/Buttons'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    {/* wrap any componenet that want to use teleported value of user context inside the provider */}
      <Count count={count} setCount={setCount}/>
      
    </>
  )
}

 
export default App
