import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Events } from './components/sections/Events'
import { Contact } from './components/sections/Contact'

import './App.css'

function App() {
  return (
    <>
    <div className="font-display">
      <Navbar />
      <Home />
      <div className="bg-gradient-to-b from-orange-300 to-orange-700">
        <Events/>
        <About />
        <Contact/>
        
      </div>
      
    </div>
      
    
      
    </>
  )
}

export default App
