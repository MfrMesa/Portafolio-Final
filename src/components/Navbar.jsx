import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import classes from "/src/style/Navbar.module.css";
import { HashLink as Anchor} from 'react-router-hash-link';
import divider from "/src/svg/divider.svg"
import {Context} from "/src/components/Wrapper"

export default function Navbar(props) {

    const context = useContext(Context);

    return (
        <Headroom>
            <nav className={classes.navigationContainerCV}>
                <ul className={classes.navigationCV}>
                    <li>
                        <Anchor className={classes.itemsCV} smooth to="#aboutme">yo, María</Anchor>
                        <img src={divider} className={classes.divider} />
                    </li>
                    <li>
                        <Anchor className={classes.itemsCV} smooth to="#proyectos">{nav_proyecto}</Anchor>
                        <img src={divider} className={classes.divider} />
                    </li>
                    <li>
                        <Anchor className={classes.itemsCV} smooth to="#experiencia">experiencia</Anchor>
                        <img src={divider} className={classes.divider} />
                    </li>
                    <li>
                        <Anchor className={classes.itemsCV} smooth to="#contacto">contacto</Anchor>
                    </li>
                </ul>
                <button value="en" onClick={context.selectLang}>ES</button>
                <button value="en-US" onClick={context.selectLang}>EN</button>
            </nav>
        </Headroom>
    );
}

