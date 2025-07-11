import { useState } from 'react'

import './App.css'

import About from './components/about/About'
import Team from './components/team/Team'
import ContactUs from './components/contactUs/ContactUs'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './pages/homePage/HomePage'
import MovieApi from './pages/movieApi/MovieApi'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Correct route for Home */}
          <Route path="/weather" element={<MovieApi />} /> {/* Correct route for About */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
