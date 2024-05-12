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



export default function AboutMe() {

    const { ref: side, inView: visibleSide} = useInView()
    const { ref: right, inView: visibleRight} = useInView()

    return (
        <section id="aboutme" className={classes.aboutInfo}>
            <div ref={side} className={`${classes.aboutMeContainer} ${visibleSide ? classes.animation : ""}` }>
                <h1 className={classes.aboutMe}>
                    <span className={classes.aboutMe1}>
                        <FormattedMessage id="un"/>
                    </span>
                    <span className={classes.aboutMe2}>
                        <FormattedMessage id="poco"/>
                    </span>
                    <span className={classes.aboutMe3}>
                        <FormattedMessage id="de"/>
                    </span>
                    <span className={classes.aboutMe4}>
                        <FormattedMessage id="mi"/>
                    </span>
                </h1>
                <h2 className={classes.shortInfo}>
                    <FormattedMessage id="me_titulo"/>
                </h2>
                <p className={classes.info}>
                    <FormattedMessage id="me_info"/>
                </p>
            </div>
            <div ref={right} className={`${classes.imagenes} ${visibleRight ? classes.animationRight : ""}` }>
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
