import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import LogIn from "./pages/LogIn"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/login" element={<LogIn />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
