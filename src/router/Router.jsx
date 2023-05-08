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
import PerEspiritual from "../components/PerEspiritual";
import Psicologico from "../pages/Psicologico";
import Productos from "../pages/Productos";
import Espiritual from "../pages/Espiritual";
import PerfilEspiritual from "../components/PerfilEspiritual";


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
        <Route path="/espiritual" element={<PerfilEspiritual/>}/>   
        <Route path="/psicologico" element={<Psicologico/>}/>   
        <Route path="/biologico" element={<Productos/>}/>   
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default router