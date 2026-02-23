import { useState } from 'react'
import { Count } from './components/Count'
import { countContext } from './components/context'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* wrap any componenet that want to use teleported value of user context inside the provider */}
      <countContext.Provider value={{count, setCount}}>
        <Count />
      </countContext.Provider>
    </>
  )
}


export default App
