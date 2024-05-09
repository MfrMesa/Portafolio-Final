import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Proyectos from './components/Proyectos'
import ExperienciaLaboral from './components/ExperienciaLaboral'
import Contacto from './components/Contacto'

export default function App() {



    return (
      <div>
        <Navbar/>
        <Banner/>
        <AboutMe/>
        <Proyectos/>
        <ExperienciaLaboral/> 
        <Contacto/>
      </div>
    )
}


