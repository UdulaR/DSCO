import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'

import './App.css'

function App() {
  return (
    <>
    <div className="bg-gradient-to-b from-orange-700 to-orange-500">
      <Navbar />
      <Home />
      <About />
    </div>
      
    
      
    </>
  )
}

export default App
