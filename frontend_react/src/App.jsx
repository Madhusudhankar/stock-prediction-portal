import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router'
import Registration from './components/Registration'
import Login from './components/Login'

function App() {
  

  return ( // Method to Create the Routes By using (Route Tag) placed inside (BrowserRouter)
    <>
       <BrowserRouter>
       <Header/>  
        <Routes>
         <Route path = '/' element={<Main/>}/>   
         <Route path = '/register' element={<Registration/>}/>
         <Route path = '/login' element={<Login/>}/>
        </Routes>
        <Footer/>
       </BrowserRouter>
       
    </>
  )
}

export default App
