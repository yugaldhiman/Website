import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Accounting from './service/Accounting'
import Auditing from './service/Auditing'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/accounting/:id' element={<Accounting />} />
        <Route path='/auditing/:id' element={<Auditing />} />
      </Routes >
    </>
  )
}

export default App

