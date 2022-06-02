import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Chroniques from './pages/Chroniques'
import Apropos from './pages/Apropos'
import Profil from './pages/Profils'
import Home from './pages/Home'
import AddChronique from './pages/AddChronique'
import Navbar from './components/home/navbar'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'
import DetailPoste from './components/choniques/DetailPoste'

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Routes>
                <Route path="/"  element={ <Home />} />
                <Route path="/chroniques"  element={ <Chroniques />} />
                <Route path="/apropos"  element={ <Apropos />} />
                <Route path="/profil"  element={ <Profil />} />
                <Route path="/addChronique"  element={ <AddChronique />} />
                <Route path="/addChronique/:idPoste"  element={ <AddChronique />} />
                <Route path="/detailPoste/:idPoste"  element={ <DetailPoste />} />
                <Route path="/login"  element={ <Login />} />
                <Route path="/signup"  element={ <SignUp />} />
            </Routes>

          </div>
        
        </BrowserRouter>
    </div>
  )
}

export default App
