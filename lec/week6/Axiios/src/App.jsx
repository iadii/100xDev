import { useState } from 'react'
import { Data } from './components/FetchData'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Data />
    </>
  )
}

export default App
