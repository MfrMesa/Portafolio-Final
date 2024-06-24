import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Proyectos from './components/Proyectos'
import ExperienciaLaboral from './components/ExperienciaLaboral'
import Contacto from './components/Contacto'



export default function App() {
    const [showBanner, setShowBanner] = useState(true);
    const [showPortfolio, setShowPortfolio] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBanner(false);
            setShowPortfolio(true);
        }, 5000); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {showBanner && <Banner />}
            {showPortfolio && (
                <>
                    <Navbar />
                    <AboutMe />
                    <Proyectos />
                    <ExperienciaLaboral />
                    <Contacto />
                </>
            )}
        </div>
    );
}