import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Work from './Pages/Work'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume'

const App = () => {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/resume' element={<Resume/>}/>

      </Routes>

      <Footer/>

    </Router>
  )
}

export default App
