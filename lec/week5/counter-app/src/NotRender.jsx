import { useState } from 'react'
import './App.css'

let state = {
    count : 0 
}

// if we dont use [useSate]
// then react wont render it
function NotRender() {

    function countIncreament(){
        console.log(state.count) 
        return state.count +=  1        
    }

  return (
    <div>
        <button onClick={countIncreament}> counter {state.count}</button>
    </div>
  )
}

export default NotRender