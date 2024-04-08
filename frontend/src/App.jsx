import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Hero from './components/Hero'
import Footer from './components/Footer'

// Note: using links instead of routing,
// because no there arent any other pages to route to

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Content/>
      <Footer/>
    </>
  )
}

export default App
