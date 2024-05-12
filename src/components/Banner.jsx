import React, { useState } from 'react'
import classes from "/src/style/Banner.module.css"
import dogs from "/src/img/dogs.png"
import scone from "/src/img/scone.png"
import azucart from "/src/img/azucart.png"
import tarta from "/src/img/tarta.png"
import mesa from "/src/img/mesa.png"
import lacasa from "/src/img/lacasa.png"
import desayuno from "/src/img/desayuno.png"
import zanahoria from "/src/img/zanahoria.png"
import manos from "/src/img/manos.png"
import membrillo from "/src/img/membrillo.png"
import casa from "/src/img/la casa.png"
import chabel from "/src/img/chabel.png"
import focaccia from "/src/img/focaccia.png"
import marmia from "/src/img/marmia.png"
import cheesecake from "/src/img/cheesecake.png"
import mousse from "/src/img/mousse.png"
import rogel from "/src/img/rogel.png"
import papelon from "/src/img/papelon.png"
import mesalarga from "/src/img/mesalarga.png"
import banca from "/src/img/banca.png"
import mesadulces from "/src/img/mesadulces.png"
import empanada from "/src/img/empanada.png"
import euro from "/src/img/euro.png"
import babka from "/src/img/babka.png"
import fava from "/src/img/fava.png"
import vegan from "/src/img/vegan.png"
import mesadulce from "/src/img/mesadulce.png"
import laban from "/src/img/laban.png"
import marquise from "/src/img/marquise.png"
import eurobuilding from "/src/img/eurobuilding.png"
import pavlova from "/src/img/pavlova.png"
import entrada from "/src/img/entrada.png"
import cheeseddl from "/src/img/cheeseddl.png"
import pan from "/src/img/pan.png"
import iga from "/src/img/iga.png"
import copetin from "/src/img/copetin.png"
import evento from "/src/img/evento.png"


export default function Banner() {

    const [verPrimero, setVerPrimero] = useState(false)
    const [verSegundo, setVerSegundo] = useState(false)
    const [verTercero, setVerTercero] = useState(false)
    const [verCuarto, setVerCuarto] = useState(false) 
    const [verQuinto, setVerQuinto] = useState(false) 
    const [verAhora, setVerAhora] = useState(false) 



    const ver1 = () => {
        setTimeout(() => {
            setVerPrimero(true);
        }, 500);
    };
    ver1();

    const ver2 = () => {
        setTimeout(() => {
            setVerSegundo(true);
        }, 700);
    };
    ver2();

    const ver3 = () => {
        setTimeout(() => {
            setVerTercero(true);
        }, 900);
    };
    ver3();

    const ver4 = () => {
        setTimeout(() => {
            setVerCuarto(true);
        }, 1100);
    };
    ver4();


    const ver5 = () => {
        setTimeout(() => {
            setVerQuinto(true);
        }, 1500);
    };
    ver5();


    const ver6 = () => {
        setTimeout(() => {
            setVerAhora(true);
        }, 1900);
    }; 
    ver6();




    
    return (
        <>
        <section className={classes.collageContainer}>
            <div className={classes.collage}>
                <img src={dogs} className={verPrimero ? classes.foto1 : classes.hidden}/>
                <img src={scone} className={verTercero ? classes.foto2 : classes.hidden}/>
                <img src={azucart} className={verSegundo ? classes.foto3 : classes.hidden}/>
                <img src={tarta} className={verCuarto ? classes.foto4 : classes.hidden}/>
                <img src={mesa} className={verPrimero ?  classes.foto5 : classes.hidden}/>
                <img src={lacasa} className={verCuarto ? classes.foto7 : classes.hidden}/>
                <img src={desayuno} className={verSegundo ? classes.foto8 : classes.hidden}/>
                <img src={zanahoria} className={verTercero ? classes.foto9 : classes.hidden}/>
                <img src={manos} className={verPrimero ?  classes.foto10 : classes.hidden}/>
                <img src={membrillo} className={verCuarto ? classes.foto13 : classes.hidden}/>
                <img src={casa} className={verSegundo ? classes.foto12 : classes.hidden}/>
                <img src={chabel} className={verPrimero ? classes.foto11 : classes.hidden}/>
                <img src={focaccia} className={verTercero ? classes.foto14 : classes.hidden}/>
                <img src={marmia} className={verSegundo ? classes.foto15 : classes.hidden}/>
                <img src={cheesecake} className={verPrimero ? classes.foto16 : classes.hidden}/>
                <img src={mousse} className={verCuarto ? classes.foto17 : classes.hidden}/>
                <img src={rogel} className={verTercero ? classes.foto18 : classes.hidden}/>
                <img src={papelon} className={verSegundo ? classes.foto19 : classes.hidden}/>
                <img src={mesalarga} className={verPrimero ? classes.foto20 : classes.hidden}/>
                <img src={banca} className={verCuarto ? classes.foto21 : classes.hidden}/>
                <img src={mesadulces} className={verCuarto ? classes.foto23 : classes.hidden}/>
                <img src={euro} className={verSegundo ? classes.foto24 : classes.hidden}/>
                <img src={empanada} className={verPrimero ? classes.foto25 : classes.hidden}/>
                <img src={babka} className={verTercero ? classes.foto26 : classes.hidden}/>
                <img src={fava} className={verCuarto ? classes.foto27 : classes.hidden}/>
                <img src={vegan} className={verCuarto ? classes.foto28 : classes.hidden}/>
                <img src={mesadulce} className={verPrimero ? classes.foto29 : classes.hidden}/>
                <img src={laban} className={verSegundo ? classes.foto30 : classes.hidden}/>
                <img src={marquise} className={verTercero ? classes.foto31 : classes.hidden}/>
                <img src={eurobuilding} className={verCuarto ? classes.foto32 : classes.hidden}/>
                <img src={pavlova} className={verPrimero ? classes.foto33 : classes.hidden}/>
                <img src={entrada} className={verSegundo ? classes.foto34 : classes.hidden}/>
                <img src={cheeseddl} className={verCuarto ? classes.foto35 : classes.hidden}/>
                <img src={pan} className={verPrimero ? classes.foto36 : classes.hidden}/>
                <img src={iga} className={verTercero ? classes.foto37 : classes.hidden}/>
                <img src={copetin} className={verSegundo ? classes.foto38 : classes.hidden}/>
                <img src={evento} className={verPrimero ? classes.foto39 : classes.hidden}/>
            </div>
                <h1 className={verQuinto ? classes.nombre : classes.hidden}>María Fernanda Gómez Mesa</h1>
                <h1 className={verAhora ? classes.ahora : classes.hidden}>Full Stack Developer & UX/UI Designer</h1>
        </section>
        </>
    )
}
