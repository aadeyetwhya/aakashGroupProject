import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Slider from './components/slider/Slider'
import About from './components/about/About'
import Team from './components/team/Team'
import ContactUs from './components/contactUs/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Slider/>
      <About/>
      <Team/>
      <ContactUs/>
    </>
  )
}

export default App
