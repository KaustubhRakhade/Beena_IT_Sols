import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'

// Note: using links instead of routing,
// because no there arent any other pages to route to

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
    </>
  )
}

export default App
