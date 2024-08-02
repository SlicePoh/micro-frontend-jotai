import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { TextReveal } from "./pages/Text"
import { Modal } from "./pages/Modal"



function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/modal" element={<Modal/>}/>
          {/* <Route exact path="/loader" element={<Loader/>}/>
          <Route exact path="/parallax" element={<Parallax />} /> */}
          <Route exact path="/text" element={<TextReveal />} />
          {/* <Route exact path="/skeleton" element={<Square />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
