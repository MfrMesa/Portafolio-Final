import React from 'react'
import classes from "/src/style/AboutMe.module.css"
import css from "/src/img/css.png"
import html from "/src/img/html.png"
import react from "/src/img/react.png"
import figma from "/src/img/figma.png"
import vite from "/src/img/vite.png"
import sql from "/src/img/sql.png"
import js from "/src/img/js.png"
import ts from "/src/img/ts.png"
import node from "/src/img/node.png"
import express from "/src/img/express.png"
import mifoto from "/src/img/yo.jpeg"


export default function AboutMe() {


    return (
        <section id="aboutme" className={classes.aboutInfo}>
            <div className={classes.aboutMeContainer}>
                <h1 className={classes.aboutMe}>
                    <span className={classes.aboutMe1}>un</span>
                    <span className={classes.aboutMe2}>poco</span>
                    <span className={classes.aboutMe3}>de</span>
                    <span className={classes.aboutMe4}>mi,</span>
                </h1>
                <h2 className={classes.shortInfo}>Cambié mi batidor por una computadora</h2>
                <p className={classes.info}>
                Después de dejar mi carrera en el campo de la pastelería, decidí aventurarme en el mundo de la tecnologia como desarrollor Full Stack y el diseño UX/UI.
                Ahora, me sumerjo en la creación de experiencias digitales, fusionando la creatividad con mis habilidades técnicas. 
                Este cambio ha sido un viaje emocionante y desafiante, estoy a la expectativa de explorar las infinitas posibilidades que ofrece este 
                campo en constante evolución.
                </p>
            </div>
            <div className={classes.imagenes}>
                <img className={classes.yo} src={mifoto} alt="Una foto mia muy profesional"/>
                <div className={classes.tecnologias}>
                    <img src={css} alt="logo tecnologia aprendida" className={classes.logos}/>
                    <img src={html} alt="logo tecnologia aprendida" className={classes.logos}/>
                    <img src={react} alt="logo tecnologia aprendida" className={classes.logos}/>
                    <img src={figma} alt="logo tecnologia aprendida" className={classes.logos}/>
                    <img src={vite} alt="logo tecnologia aprendida" className={classes.logos}/>
                    <img src={sql} alt="logo tecnologia aprendida" className={classes.logos}/>
                    <img src={js} alt="logo tecnologia aprendida" className={classes.logos}/>
                    <img src={ts} alt="logo tecnologia aprendida"  className={classes.logos}/>
                    <img src={node} alt="logo tecnologia aprendida" className={classes.logos}/>
                    <img src={express} alt="logo tecnologia aprendida" className={classes.logos}/>
                </div>
            </div>
    </section>
    )
}
