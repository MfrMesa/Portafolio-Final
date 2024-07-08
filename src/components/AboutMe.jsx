import React, { useEffect, useState } from 'react'
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
import mesa from "/src/img/mesadulce.png"
import diploma from "/src/img/iga.png"
import { FormattedMessage } from 'react-intl';
import { useInView } from 'react-intersection-observer'



export default function AboutMe() {

    const { ref: side, inView: visibleSide } = useInView();

    const [photo, SetPhoto] = useState(false);
    const [photo1, SetPhoto1] = useState(false);
    const [photo2, SetPhoto2] = useState(false);
    
        useEffect(() => {
        const timer1 = setTimeout(() => {
            SetPhoto2(true);
        }, 500);
    
        const timer2 = setTimeout(() => {
            SetPhoto1(true);
        }, 800);
    
        const timer3 = setTimeout(() => {
            SetPhoto(true);
        }, 1200);
    
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
        }, []);


    return (
        <section id="aboutme" className={classes.aboutInfo}>
            <div ref={side} className={`${classes.aboutMeContainer} ${visibleSide ? classes.animation : ""}` }>
                <h1 className={classes.nombre}><FormattedMessage id="hola"/> María Fernanda</h1>
                <h1 className={classes.ahora}>Front-end Developer & UX/UI Designer</h1>
                    <h2 className={classes.shortInfo}>
                        <FormattedMessage id="me_titulo"/>
                    </h2>
                    <p className={classes.info}>
                        <FormattedMessage id="me_info"/>
                    </p>
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
            <div className={classes.imagenes}>
                <img className={`${classes.yo} ${photo ? classes.viewPhoto : ""}` } src={mifoto} alt="Una foto mia muy profesional"/>
                <img className={`${classes.yo1} ${photo1 ? classes.viewPhoto : ""}` }  src={diploma} alt="Una foto mia muy profesional"/>
                <img className={`${classes.yo2} ${photo2 ? classes.viewPhoto : ""}` }  src={mesa} alt="Una foto mia muy profesional"/>
            </div>
    </section>
    )
}
