import React, { useRef, useState } from 'react'
import classes from "/src/style/Contacto.module.css"
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import github from "/src/svg/github.svg"
import linkedin from "/src/svg/linkedin.svg"
import mail from "/src/svg/mail.svg"
import phone from "/src/svg/phone.svg"


export default function Contacto() {

    const [mensaje, setMensaje] = useState("");
    const form = useRef()

    
    function handleChange(event) {
        const { name, value } = event.target;
        setMensaje(prevMensaje => ({
            ...prevMensaje,
            [name]: value
        }));
    }



    function handleFormSubmit(event){
        event.preventDefault();
            
        emailjs
            .sendForm('service_r5da7gh', 'template_1vugzp6', form.current, {
                publicKey: '-tVycMvnjnCHq8v9N',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        setMensaje("")
    };





    return (
        <section id="contacto" className={classes.contactoInfo}>
            <div  className={classes.contactoContainer}>
                <h3 className={classes.contactoTitulo}>
                    <span className={classes.exclamacion}>¡</span>
                    construyamos un futuro profesional juntos
                    <span className={classes.exclamacion2}>!</span>
                </h3>
                <p className={classes.textoContacto}>
                mantengamonos en contacto
                </p>
            </div>
            <div className={classes.linksContactoContainer}>
                <div className={classes.linksContainer}>
                    <Link to="https://github.com/MfrMesa" target="_blank" className={classes.linksContacto}>
                        <img src={github} className={classes.svg}/>
                        GitHub
                    </Link>
                    <Link to="https://www.linkedin.com/in/mfrmesa/" target="_blank" className={classes.linksContacto}>
                        <img src={linkedin} className={classes.svg}/>
                        LinkedIn
                    </Link>
                    <span className={`${classes.linksContacto} ${classes.copiable}`}>
                        <img src={mail} className={classes.svg}/>
                        mfrmesa@yahoo.com
                    </span>
                    <span className={classes.linksContacto}>
                        <img src={phone} className={classes.svg}/>
                        +34 667 38 35 72
                    </span>
                </div>
                <form ref={form} onClick={handleFormSubmit}>
                    <div className={classes.mensaje}>
                        <textarea id="mensaje" name="mensaje" value={mensaje.mensaje} itemType="text" onChange={handleChange}></textarea>
                    </div>
                    <button className={classes.boton} type="submit">enviar mensaje</button>
                </form>
            </div>
        </section>
    )
}
