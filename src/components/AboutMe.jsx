import React, { useContext } from 'react'
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
import { FormattedMessage } from 'react-intl';
import { useInView } from 'react-intersection-observer'
import ellipseM from "/src/svg/ellipsemorado.svg"
import ellipseN from "/src/svg/ellipsenaranja.svg"
import ellipseR from "/src/svg/ellipserosa.svg"



export default function AboutMe() {

    const { ref: side, inView: visibleSide} = useInView()
    const { ref: right, inView: visibleRight} = useInView()

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
            <div ref={right} className={`${classes.imagenes} ${visibleRight ? classes.animationRight : ""}` }>
                <div className={classes.ellipses}>
                    <img src={ellipseM} className={classes.ellipse1}/>
                    <img src={ellipseN} className={classes.ellipse2}/>
                    <img src={ellipseR} className={classes.ellipse3}/>
                    <img src={ellipseM} className={classes.ellipse4}/>
                    <img src={ellipseN} className={classes.ellipse5}/>
                    <img src={ellipseR} className={classes.ellipse6}/>
                </div>
                <img className={classes.yo} src={mifoto} alt="Una foto mia muy profesional"/>
            </div>
    </section>
    )
}
