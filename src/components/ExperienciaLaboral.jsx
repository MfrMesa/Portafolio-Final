import React, { useState } from 'react'
import classes from "/src/style/ExperienciaLaboral.module.css"
import { Link } from 'react-router-dom'
import pin from "/src/svg/pin.svg"


export default function Experiencia() {

    const [clicked, setClicked] = useState(null); 
    const [visible, setVisible] = useState([false, false, false]); 


    function handleClick(index) {

        if (visible[index]) {
            setClicked(null); 
            setVisible([false, false, false]); 
        } else {
            setClicked(index); 
            setVisible(prev => prev.map((_, i) => i === index)); 
        }
    }



    return (
        <section id="experiencia" className={classes.experienciaCV}>
        <div className={classes.contenedorTitulo}>
            <h3 className={classes.tituloSeccion}>
                <span className={classes.titulo1}>expe</span>
                <span className={classes.titulo2}>rien</span>
                <span className={classes.titulo3}>cia</span>
                <span className={classes.titulo4}>labo</span>   
                <span className={classes.titulo5}>ral</span>
            </h3>
        </div>
        <article className={classes.resumenCV}>
            <div className={`${classes.contenedorTituloTrabajo} ${clicked === 0 ? classes.clicked : ''}`} onClick={() => handleClick(0)}>
                <div className={classes.tituloContenedor}>
                    <h3 className={classes.tituloTrabajo}>responsable de área</h3>
                    <svg className={classes.svg} width="29" height="19" viewBox="0 0 29 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.288785 5.49536L6.17005 0.587411L14.5323 8.15069L23.1892 0.926365L28.8704 6.06459L20.2104 13.2915L19.5325 13.8627L14.3387 18.197L14.3357 18.1996L13.6687 17.6019L8.65154 13.0642L8.65481 13.0615L0.288785 5.49536ZM6.12351 2.92446L2.97857 5.54893L11.3379 13.1095L11.3347 13.1123L14.3787 15.8653L17.5305 13.2351L18.2078 12.6644L26.1806 6.01102L23.1427 3.26341L14.4858 10.4877L6.12351 2.92446Z" fill="currentColor"/>
                    </svg>
                </div>
                <span className={classes.fechaTrabajo}>2023</span>
            </div>
            {visible[0] && (
            <div className={classes.infoContainer}>
                <div className={classes.locacionConatiner}>
                    <img src={pin} id={classes.pin}/>
                    <Link className={classes.locacion} to="https://sweetdeliverymadrid.es/">SWEET DELIVERY / MADRID</Link>
                </div>
                <p className={classes.descripcionTrabajo}>
                Liderar la implementación de la tienda. Planificación
                de eventos semanales y mensuales. Coordinar con
                proveedores. Supervisión de personal a cargo.
                Planificación y control de horario del personal.
                Asignación de tareas y actividades del personal.
                Diseño e innovación de productos.                
                </p>
                <div className={classes.habilidadesContainer}>
                    <span className={classes.habilidades}>LIDERAZGO</span>
                    <span className={classes.habilidades}>INNOVACIÓN</span>
                    <span className={classes.habilidades}>TRABAJO EN EQUIPO</span>
                </div>
            </div>
            )}
        </article>
        <article className={classes.resumenCV}>
            <div className={`${classes.contenedorTituloTrabajo} ${clicked === 1 ? classes.clicked : ''}`} onClick={() => handleClick(1)}>
                <div className={classes.tituloContenedor}>
                    <h3 className={classes.tituloTrabajo}>manager de tienda</h3>
                    <svg className={classes.svg} width="29" height="19" viewBox="0 0 29 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.288785 5.49536L6.17005 0.587411L14.5323 8.15069L23.1892 0.926365L28.8704 6.06459L20.2104 13.2915L19.5325 13.8627L14.3387 18.197L14.3357 18.1996L13.6687 17.6019L8.65154 13.0642L8.65481 13.0615L0.288785 5.49536ZM6.12351 2.92446L2.97857 5.54893L11.3379 13.1095L11.3347 13.1123L14.3787 15.8653L17.5305 13.2351L18.2078 12.6644L26.1806 6.01102L23.1427 3.26341L14.4858 10.4877L6.12351 2.92446Z" fill="currentColor"/>
                    </svg>
                </div>
                <span className={classes.fechaTrabajo}>2022</span>
            </div>
            {visible[1] && (
            <div className={classes.infoContainer}>
                <div className={classes.locacionConatiner}>
                    <img src={pin} id={classes.pin}/>
                    <Link className={classes.locacion} to="https://www.instagram.com/amaris1968/">AMARIS / MADRID</Link>
                </div>
                <p className={classes.descripcionTrabajo}>
                Diseño, planificación y ejecución en la apertura de
                tienda. Coordinar con proveedores. Supervisión de
                personal a cargo. Planificación y control de horario
                del personal. Gestión de inventario. Asignación de
                tareas y actividades del personal. Manejo de
                presupuesto y caja chica. Diseño e innovación de productos.                
                </p>
                <div className={classes.habilidadesContainer}>
                    <span className={classes.habilidades}>FORMACIÓN DE PERSONAL</span>
                    <span className={classes.habilidades}>ATENCIÓN AL CLIENTE</span>
                    <span className={classes.habilidades}>GERENCIA DE TIENDA</span>
                </div>
            </div>
            )}
        </article>
        <article className={classes.resumenCV}>
            <div className={`${classes.contenedorTituloTrabajo} ${clicked === 2 ? classes.clicked : ''}`} onClick={() => handleClick(2)}>
                <div className={classes.tituloContenedor}>
                    <h3 className={classes.tituloTrabajo}>jefe de pastelería</h3>
                    <svg className={classes.svg} width="29" height="19" viewBox="0 0 29 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.288785 5.49536L6.17005 0.587411L14.5323 8.15069L23.1892 0.926365L28.8704 6.06459L20.2104 13.2915L19.5325 13.8627L14.3387 18.197L14.3357 18.1996L13.6687 17.6019L8.65154 13.0642L8.65481 13.0615L0.288785 5.49536ZM6.12351 2.92446L2.97857 5.54893L11.3379 13.1095L11.3347 13.1123L14.3787 15.8653L17.5305 13.2351L18.2078 12.6644L26.1806 6.01102L23.1427 3.26341L14.4858 10.4877L6.12351 2.92446Z" fill="currentColor"/>
                    </svg>
                </div>
                <span className={classes.fechaTrabajo}>2019</span>
            </div>
            {visible[2] && (
            <div className={classes.infoContainer}>
                <div className={classes.locacionConatiner}>
                    <img src={pin} id={classes.pin}/>
                    <Link className={classes.locacion} to="https://www.copetincatering.com.ar/index.html">COPETÍN CATERING / BUENOS AIRES</Link>
                </div>
                <p className={classes.descripcionTrabajo}>
                Supervisión de un equipo de seis personas a cargo.
                Asignación de tareas y actividades del personal.
                Planificación y control de horario del personal.
                Gestión de inventario. Diseño e innovación de
                productos.                
                </p>
                <div className={classes.habilidadesContainer}>
                    <span className={classes.habilidades}>CREATIVIDAD</span>
                    <span className={classes.habilidades}>RESOLUCIÓN DE CONFLICTOS</span>
                    <span className={classes.habilidades}>GESTIÓN INVENTARIO</span>
                </div>
            </div>
            )}
        </article>
        <div className={classes.verCv}>
            <Link id={classes.cvCompleto} to="/src/María Fernanda Gómez Mesa  Full Stack Developer & UXUI Designer.pdf"  target="_blank">ver curriculum completo</Link>
        </div>
    </section>
    )
}