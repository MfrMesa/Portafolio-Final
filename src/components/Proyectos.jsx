import React, { useState } from 'react'
import classes from "/src/style/Proyecto.module.css"
import { Link } from 'react-router-dom'
import villa from "/src/img/VillaSol.mp4"
import nintendo from "/src/img/Nintendo.mp4"
import falcon from "/src/img/Falcon.mp4"
import pasteleria from "/src/img/pasteleria.mp4"


export default function Proyectos() {

    const [clicked, setClicked] = useState(null); 
    const [mascaras, setMascaras] = useState([false, false, false, false]);

    function handleVisible(index) {
        setClicked(null)
        setMascaras(prevMascaras => {
            const newMascaras = [...prevMascaras];
            newMascaras[index] = !newMascaras[index];
            return newMascaras;
        });
    }


    return (
        <section id="proyectos" className={classes.galeriaProyectos}>
            <h2 className={classes.titlegaleria}>
                <span className={classes.galeriaTitulo1}>pro</span>
                <span className={classes.galeriaTitulo2}>yec</span>
                <span className={classes.galeriaTitulo3}>tos</span>
            </h2>
            <div className={classes.cardsContainerTop}>
                <div id={classes.proyecto1}> 
                    <video id={classes.card1} controls>
                        <source src={villa} type="video/mp4" />
                    </video>
                    <button className={classes.boton} onClick={() => handleVisible(0)}>saber más</button>
                {mascaras[0] && (
                <article className={`${classes.mascara1} show`}>
                    <h3 className={classes.tituloProyecto}>VillaSol Hotel</h3>
                    <h3 className={classes.tituloSecundario}>llevado a cabo en equipo</h3>
                    <p className={classes.descripcion}>
                    Página web creada desde cero. <br/> Diseñé el Home en Figma y luego traduje esos diseños a componentes funcionales utilizando React con Vite, complementada con estilos CSS y Sass responsivos 
                    asegurándome de que cada elemento fuera coherente con nuestra visión. Me responsabilicé de desarrollar y diseñar los componentes del footer, banner, navbar, 
                    card del Home, así como la página 404 y la página de restaurantes con sus respectivos componentes. También darle los últimos toques de diseño. Nos mantuvimos organizados utilizando 
                    herramientas como Miró, Figma, Trello y Github, lo que nos permitió colaborar de manera eficiente y cumplir con nuestro plazo de entrega de un mes.
                    </p>
                    <Link id={classes.proyectoLink} to="https://github.com/MfrMesa/VillaSol-Hotel">ver proyecto</Link>
                </article>
                )}
                </div> 
            </div>
            <div className={classes.cardsContainerMiddle}>
                <div id={classes.proyecto2}>
                    <video id={classes.card2} controls>
                        <source src={nintendo} type="video/mp4" />
                    </video>
                    <button className={classes.botonmiddle} onClick={() => handleVisible(1)}>saber más</button>
                {mascaras[1] && (
                <article className={`${classes.mascara2} show`}>
                        <h3 className={classes.tituloProyecto}>Nintendo Clone (Landing Page)</h3>
                        <h3 className={classes.tituloSecundario}>llevado a cabo en equipo</h3>
                        <p className={classes.descripcion}>
                        Fui la responsable de la creación del navbar, utilizando HTML y CSS con diseño adaptable (responsive). Elegí por incluir JavaScript para agregar funcionalidades interactivas como dropdowns y animaciones. 
                        Para mantenernos organizados, optamos por Trello y Github, que facilitaron la colaboración y el seguimiento del progreso del proyecto. Tuvimos un mes y medio como plazo de entrega.
                        </p>
                        <Link id={classes.proyectoLink} to="https://github.com/MfrMesa/Nintendo-Clone">ver proyecto</Link>
                </article>
                )}
                </div>
                <div id={classes.proyecto3}>
                    <video id={classes.card3} controls>
                        <source src={falcon} type="video/mp4"/>
                    </video>
                    <button className={classes.botonmiddle} onClick={() => handleVisible(2)}>saber más</button>
                {mascaras[2] && (
                <article className={`${classes.mascara3} show`}>
                        <h3 className={classes.tituloProyecto}>Falcon Dashboard Clone (Landing Page)</h3>
                        <h3 className={classes.tituloSecundario}>llevado a cabo en equipo</h3>
                        <p className={classes.descripcion}>
                        Dirigí y lideré este proyecto <br/> donde mi responsabilidad fue la creación del sidebar, el carrito de compras y la estructura de las tarjetas centrales. 
                        Para lograrlo, utilizamos HTML, CSS con diseño adaptable (responsive) y JavaScript. Nuestra gestión se llevó a cabo eficientemente gracias a Trello y Github.
                        Todo esto en un plazo de entrega de un mes.
                        </p>
                        <Link id={classes.proyectoLink} to="https://github.com/MfrMesa/Falcon-Dashboard-Clone">ver proyecto</Link>
                </article>
                )}
                </div>
            </div>
            <div className={classes.cardsContainerBottom}>
                <div id={classes.proyecto4}>
                    <video id={classes.card4} controls>
                        <source src={pasteleria} type="video/mp4"/>
                    </video>
                    <button className={classes.boton} onClick={() => handleVisible(3)}>saber más</button>
                {mascaras[3] && (
                <article className={`${classes.mascara4} show `}>
                        <h3 className={classes.tituloProyecto}>Peonías & Jazmines Pastelería Personalizada (e-Commerce)</h3>
                        <h3 className={classes.tituloSecundario}>proyecto personal</h3>
                        <p className={classes.descripcion}>
                        Desde la concepción hasta la implementación, llevé el proyecto a la vida utilizando Figma para el diseño, que luego transformé 
                        en una aplicación React con Vite, complementada con estilos CSS responsivos. Además de la funcionalidad básica, integré 
                        bibliotecas como Email.js para formularios y Slick para un slider suave, mientras que Stripe gestionaba la pasarela de pago. 
                        Para la gestión de datos, simulé una base de datos con mocks de arrays,.  
                        </p>
                        <Link id={classes.proyectoLink} to="https://github.com/MfrMesa/Peonias-Jazmines-Pasteleria">ver proyecto</Link>
                </article>
                )}
                </div>
            </div>
    </section>
    )
}
