

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import About from './pages/AboutPage/AboutPage'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/services' element={<ServicesPage/>} />
      <Route path='/a-propos' element={<About/>} />
    </Routes>
    
    <Footer/>
    </>

  )
}

export default App
