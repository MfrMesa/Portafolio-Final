import React, { useContext } from 'react';
import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import classes from "/src/style/Navbar.module.css";
import { HashLink as Anchor} from 'react-router-hash-link';
import divider from "/src/svg/divider.svg"
import {Context} from "/src/components/Wrapper"
import { FormattedMessage } from 'react-intl';


export default function Navbar() {

    const context = useContext(Context);

    return (
        <Headroom>
            <nav className={classes.navigationContainerCV}>
                <ul className={classes.navigationCV}>
                    <li>
                        <Anchor className={classes.itemsCV} smooth to="#aboutme">
                        <FormattedMessage id="nav_yo"/>
                        </Anchor>
                        <img src={divider} className={classes.divider} />
                    </li>
                    <li>
                        <Anchor className={classes.itemsCV} smooth to="#proyectos">
                        <FormattedMessage id="nav_proyecto"/>
                        </Anchor>
                        <img src={divider} className={classes.divider} />
                    </li>
                    <li>
                        <Anchor className={classes.itemsCV} smooth to="#experiencia">
                        <FormattedMessage id="nav_experiencia"/>
                        </Anchor>
                        <img src={divider} className={classes.divider} />
                    </li>
                    <li>
                        <Anchor className={classes.itemsCV} smooth to="#contacto">
                        <FormattedMessage id="nav_contacto"/>
                        </Anchor>
                    </li>
                </ul>
                <button value="en" onClick={context.selectLang}>ES</button>
                <button value="en-US" onClick={context.selectLang}>EN</button>

            </nav>
        </Headroom>
    );
}

