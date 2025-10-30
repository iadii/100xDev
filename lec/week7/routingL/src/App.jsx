import { useState } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Landing } from './components/Landing'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="Dashboard" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
