import { useState } from 'react'
import { Count } from './components/Count'
import { Button } from './components/Buttons'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Count count={count} setCount={setCount}/>
      {/* i want Button componenet inside of <Count />  */}
      {/* since <Button /> does not have setCount so we will have to pass setCount as prop in <Count /> even though <Count/> doesnot need it  */}
      {/* <Button count={count} setCount={setCount}/> */}
    </>
  )
}


export default App
