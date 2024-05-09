import React from 'react';
import Headroom from 'react-headroom';
import classes from "/src/style/Navbar.module.css";
import { HashLink as Anchor} from 'react-router-hash-link';
import divider from "/src/svg/divider.svg"

export default function Navbar() {
    return (
        <Headroom>
            <nav className={classes.navigationContainerCV}>
                <ul className={classes.navigationCV}>
                    <li>
                        <Anchor className={classes.itemsCV} smooth to="#aboutme">yo, María</Anchor>
                        <img src={divider} className={classes.divider} />
                    </li>
                    <li>
                        <Anchor className={classes.itemsCV} smooth to="#proyectos">proyectos</Anchor>
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
            </nav>
        </Headroom>
    );
}

