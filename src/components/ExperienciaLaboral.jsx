import React, { useContext, useState } from 'react'
import classes from "/src/style/ExperienciaLaboral.module.css"
import { Link } from 'react-router-dom'
import pin from "/src/svg/pin.svg"
import { FormattedMessage } from 'react-intl';
import {Context} from "/src/components/Wrapper"
import CV from "/src/María Fernanda Gómez Mesa  Front-end Developer & UXUI Designer (en).pdf"


export default function Experiencia() {

    const context = useContext(Context);
    const [clicked, setClicked] = useState(null); 
    const [visible, setVisible] = useState([false, false, false, false]); 


    function handleClick(index) {

        if (visible[index]) {
            setClicked(null); 
            setVisible([false, false, false, false]); 
        } else {
            setClicked(index); 
            setVisible(prev => prev.map((_, i) => i === index)); 
        }
    }


    return (
        <section id="experiencia" className={classes.experienciaCV}>
        <div className={classes.contenedorTitulo}>
            <h3 className={classes.tituloSeccion}>
                <span className={classes.titulo1}>
                    <FormattedMessage id="expe"/>
                </span>
                <span className={classes.titulo2}>
                    <FormattedMessage id="rien"/>
                </span>
                <span className={classes.titulo3}>
                    <FormattedMessage id="cia"/>
                </span>
                <span className={classes.titulo4}>
                    <FormattedMessage id="labo"/>
                </span>   
                <span className={classes.titulo5}>
                    <FormattedMessage id="ral"/>
                </span>
            </h3>
        </div>
        <article className={classes.resumenCV}>
            <div className={`${classes.contenedorTituloTrabajo} ${clicked === 0 ? classes.clicked : ''}`} onClick={() => handleClick(0)}>
                <div className={classes.tituloContenedor}>
                    <h3 className={classes.tituloTrabajo}>
                        <FormattedMessage id="titulo_trabajo"/>
                    </h3>
                    <svg className={classes.svg} width="29" height="19" viewBox="0 0 29 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.288785 5.49536L6.17005 0.587411L14.5323 8.15069L23.1892 0.926365L28.8704 6.06459L20.2104 13.2915L19.5325 13.8627L14.3387 18.197L14.3357 18.1996L13.6687 17.6019L8.65154 13.0642L8.65481 13.0615L0.288785 5.49536ZM6.12351 2.92446L2.97857 5.54893L11.3379 13.1095L11.3347 13.1123L14.3787 15.8653L17.5305 13.2351L18.2078 12.6644L26.1806 6.01102L23.1427 3.26341L14.4858 10.4877L6.12351 2.92446Z" fill="currentColor"/>
                    </svg>
                </div>
                <span className={classes.fechaTrabajo}>2024</span>
            </div>
            {visible[0] && (
            <div className={classes.infoContainer}>
                <div className={classes.locacionContainer}>
                    <img src={pin} id={classes.pin}/>
                    <Link className={classes.locacion} to="https://github.com/MfrMesa">Freelance</Link>
                </div>
                <p className={classes.descripcionTrabajo}>
                    <FormattedMessage id="descripcion_trabajo"/>
                </p>
                <div className={classes.habilidadesContainer}>
                    <span className={classes.habilidades}>
                        <FormattedMessage id="liderazgo"/>
                    </span>
                    <span className={classes.habilidades}>
                        <FormattedMessage id="innovacion"/>
                    </span>
                    <span className={classes.habilidades}>
                        <FormattedMessage id="equipo"/>
                    </span>
                </div>
            </div>
            )}
        </article>
        <article className={classes.resumenCV}>
            <div className={`${classes.contenedorTituloTrabajo} ${clicked === 0 ? classes.clicked : ''}`} onClick={() => handleClick(1)}>
                <div className={classes.tituloContenedor}>
                    <h3 className={classes.tituloTrabajo}>
                        <FormattedMessage id="titulo_trabajo1"/>
                    </h3>
                    <svg className={classes.svg} width="29" height="19" viewBox="0 0 29 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.288785 5.49536L6.17005 0.587411L14.5323 8.15069L23.1892 0.926365L28.8704 6.06459L20.2104 13.2915L19.5325 13.8627L14.3387 18.197L14.3357 18.1996L13.6687 17.6019L8.65154 13.0642L8.65481 13.0615L0.288785 5.49536ZM6.12351 2.92446L2.97857 5.54893L11.3379 13.1095L11.3347 13.1123L14.3787 15.8653L17.5305 13.2351L18.2078 12.6644L26.1806 6.01102L23.1427 3.26341L14.4858 10.4877L6.12351 2.92446Z" fill="currentColor"/>
                    </svg>
                </div>
                <span className={classes.fechaTrabajo}>2023</span>
            </div>
            {visible[1] && (
            <div className={classes.infoContainer}>
                <div className={classes.locacionContainer}>
                    <img src={pin} id={classes.pin}/>
                    <Link className={classes.locacion} to="https://sweetdeliverymadrid.es/">Develhope / MADRID</Link>
                </div>
                <p className={classes.descripcionTrabajo}>
                    <FormattedMessage id="descripcion_trabajo1"/>
                </p>
                <div className={classes.habilidadesContainer}>
                    <span className={classes.habilidades}>
                        <FormattedMessage id="liderazgo"/>
                    </span>
                    <span className={classes.habilidades}>
                        <FormattedMessage id="innovacion"/>
                    </span>
                    <span className={classes.habilidades}>
                        <FormattedMessage id="equipo"/>
                    </span>
                </div>
            </div>
            )}
        </article>
        <article className={classes.resumenCV}>
            <div className={`${classes.contenedorTituloTrabajo} ${clicked === 1 ? classes.clicked : ''}`} onClick={() => handleClick(2)}>
                <div className={classes.tituloContenedor}>
                    <h3 className={classes.tituloTrabajo}>
                        <FormattedMessage id="titulo_trabajo2"/>
                    </h3>
                    <svg className={classes.svg} width="29" height="19" viewBox="0 0 29 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.288785 5.49536L6.17005 0.587411L14.5323 8.15069L23.1892 0.926365L28.8704 6.06459L20.2104 13.2915L19.5325 13.8627L14.3387 18.197L14.3357 18.1996L13.6687 17.6019L8.65154 13.0642L8.65481 13.0615L0.288785 5.49536ZM6.12351 2.92446L2.97857 5.54893L11.3379 13.1095L11.3347 13.1123L14.3787 15.8653L17.5305 13.2351L18.2078 12.6644L26.1806 6.01102L23.1427 3.26341L14.4858 10.4877L6.12351 2.92446Z" fill="currentColor"/>
                    </svg>
                </div>
                <span className={classes.fechaTrabajo}>2014-2023</span>
            </div>
            {visible[2] && (
            <div className={classes.infoContainer}>
                <div className={classes.locacionContainer}>
                    <img src={pin} id={classes.pin}/>
                    <Link className={classes.locacion} to="https://www.instagram.com/amaris1968/"> Varias Empresas / MADRID / BUENOS AIRES / CARACAS</Link>
                </div>
                <p className={classes.descripcionTrabajo}>
                    <FormattedMessage id="descripcion_trabajo2"/>                
                </p>
                <div className={classes.habilidadesContainer}>
                    <span className={classes.habilidades}>
                        <FormattedMessage id="personal"/> 
                    </span>
                    <span className={classes.habilidades}>
                        <FormattedMessage id="cliente"/> 
                    </span>
                    <span className={classes.habilidades}>
                        <FormattedMessage id="gerencia"/> 
                    </span>
                </div>
            </div>
            )}
        </article>
        <div className={classes.verCv}>
            <Link id={classes.cvCompleto} to={CV}  target="_blank">
                <FormattedMessage id="cv"/>
            </Link>
        </div>
    </section>
    )
}
