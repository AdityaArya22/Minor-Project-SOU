import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Home/Hero'
import GetStarted from './Components/Home/GetStarted'

// project created using vite use "npm run dev" to start project
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <GetStarted/>
    </>
  )
}

export default App
