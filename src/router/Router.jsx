import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react'
import Header from "../pages/Header";
import Precio from "../pages/Precio";
import Footer from "../pages/Footer";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Preguntas from "../pages/Preguntas";
import Registrarse from "../pages/Regitrarse";
import Login from "../pages/Login";

import Psicologicos from "../pages/Psicologicos";

import Espirituals from "../pages/Espirituals"
import Biologicos from "../pages/Biologicos"

const router = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/precio" element={<Precio/>}/>   
        <Route path="/blog" element={<Blog/>}/>   
        <Route path="/" element={<Home/>}/>   
        <Route path="/preguntas" element={<Preguntas/>}/>   
        <Route path="/registrarse" element={<Registrarse/>}/>   
        <Route path="/login" element={<Login/>}/>   
        <Route path="/espiritual" element={<Espirituals/>}/>   
        <Route path="/psicologico" element={<Psicologicos/>}/>   
        <Route path="/biologico" element={<Biologicos/>}/>   
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default router