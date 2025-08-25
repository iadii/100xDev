import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);


  return (
    <div>
        <CustomButtom  count={count} setCount={setCount}/>
    </div>
  ) 
}

function CustomButtom(props){

    function countIncreament(){
        props.setCount( props.count + 1)
  }
  return (
    <div>
        <button onClick={countIncreament}> counter {props.count}</button>
    </div>
  ) 
}

export default App