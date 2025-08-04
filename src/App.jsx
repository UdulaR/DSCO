import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Events } from './components/sections/Events'
import { Contact } from './components/sections/Contact'
import { MobileMenu } from './components/sections/MobileMenu'

import './App.css'

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    <div className="font-display">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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
