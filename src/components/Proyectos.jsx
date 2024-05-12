import React, { useState } from 'react'
import classes from "/src/style/Proyecto.module.css"
import { Link } from 'react-router-dom'
import villa from "/src/img/VillaSol.mp4"
import nintendo from "/src/img/Nintendo.mp4"
import falcon from "/src/img/Falcon.mp4"
import pasteleria from "/src/img/pasteleria.mp4"
import { FormattedMessage } from 'react-intl';


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
                <span className={classes.galeriaTitulo1}>
                    <FormattedMessage id="pro"/>
                </span>
                <span className={classes.galeriaTitulo2}>
                    <FormattedMessage id="yec"/>
                </span>
                <span className={classes.galeriaTitulo3}>
                    <FormattedMessage id="tos"/>
                </span>
            </h2>
            <div className={classes.cardsContainerTop}>
                <div id={classes.proyecto1}> 
                    <video id={classes.card1} controls>
                        <source src={villa} type="video/mp4" />
                    </video>
                    <button className={classes.boton} onClick={() => handleVisible(0)}>
                        <FormattedMessage id="saber_mas"/>
                    </button>
                {mascaras[0] && (
                <article className={`${classes.mascara1} show`}>
                    <h3 className={classes.tituloProyecto}>VillaSol Hotel</h3>
                    <h3 className={classes.tituloSecundario}>
                        <FormattedMessage id="sub_proyecto"/>
                    </h3>
                    <p className={classes.descripcion}>
                        <FormattedMessage id="descripcion_proyecto1"/>
                    </p>
                    <Link id={classes.proyectoLink} to="https://github.com/MfrMesa/VillaSol-Hotel">
                        <FormattedMessage id="ver_proyecto"/>
                    </Link>
                </article>
                )}
                </div> 
            </div>
            <div className={classes.cardsContainerMiddle}>
                <div id={classes.proyecto2}>
                    <video id={classes.card2} controls>
                        <source src={nintendo} type="video/mp4" />
                    </video>
                    <button className={classes.botonmiddle} onClick={() => handleVisible(1)}>
                        <FormattedMessage id="saber_mas"/>
                    </button>
                {mascaras[1] && (
                <article className={`${classes.mascara2} show`}>
                        <h3 className={classes.tituloProyecto}>Nintendo Clone (Landing Page)</h3>
                        <h3 className={classes.tituloSecundario}>
                            <FormattedMessage id="sub_proyecto"/>
                        </h3>
                        <p className={classes.descripcion}>
                            <FormattedMessage id="descripcion_proyecto2"/>
                        </p>
                        <Link id={classes.proyectoLink} to="https://github.com/MfrMesa/Nintendo-Clone">
                            <FormattedMessage id="ver_proyecto"/>
                        </Link>
                </article>
                )}
                </div>
                <div id={classes.proyecto3}>
                    <video id={classes.card3} controls>
                        <source src={falcon} type="video/mp4"/>
                    </video>
                    <button className={classes.botonmiddle} onClick={() => handleVisible(2)}>
                        <FormattedMessage id="saber_mas"/>
                    </button>
                {mascaras[2] && (
                <article className={`${classes.mascara3} show`}>
                        <h3 className={classes.tituloProyecto}>Falcon Dashboard Clone (Landing Page)</h3>
                        <h3 className={classes.tituloSecundario}>
                            <FormattedMessage id="sub_proyecto"/>
                        </h3>
                        <p className={classes.descripcion}>
                            <FormattedMessage id="descripcion_proyecto3"/>
                        </p>
                        <Link id={classes.proyectoLink} to="https://github.com/MfrMesa/Falcon-Dashboard-Clone">
                            <FormattedMessage id="ver_proyecto"/>
                        </Link>
                </article>
                )}
                </div>
            </div>
            <div className={classes.cardsContainerBottom}>
                <div id={classes.proyecto4}>
                    <video id={classes.card4} controls>
                        <source src={pasteleria} type="video/mp4"/>
                    </video>
                    <button className={classes.boton} onClick={() => handleVisible(3)}>
                        <FormattedMessage id="saber_mas"/>
                    </button>
                {mascaras[3] && (
                <article className={`${classes.mascara4} show `}>
                        <h3 className={classes.tituloProyecto}>
                            <FormattedMessage id="peonias"/>
                        </h3>
                        <h3 className={classes.tituloSecundario}>
                            <FormattedMessage id="personalp"/>
                        </h3>
                        <p className={classes.descripcion}>
                            <FormattedMessage id="descripcion_proyecto4"/>
                        </p>
                        <Link id={classes.proyectoLink} to="https://github.com/MfrMesa/Peonias-Jazmines-Pasteleria">
                            <FormattedMessage id="ver_proyecto"/>
                        </Link>
                </article>
                )}
                </div>
            </div>
    </section>
    )
}
