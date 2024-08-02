
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { TextReveal } from "remotetwoApp/Text"
import { Modal } from "remotetwoApp/Modal"
import { Home } from "./pages/Home"
function App() {

  return (
    <div className='font-baloo '>
       <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/modal" element={<Modal/>}/>
          {/* <Route exact path="/loader" element={<Loader/>}/>
          <Route exact path="/parallax" element={<Parallax />} /> */}
          <Route exact path="/text" element={<TextReveal />} />
          {/* <Route exact path="/skeleton" element={<Square />} /> */}
        </Routes>
      </Router>
       
    </div>
  )
}

export default App
