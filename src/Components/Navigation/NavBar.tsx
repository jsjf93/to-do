import React from 'react';
import styles from './NavBar.module.css';
import menu from './menu-icon.svg';
import { createClassName } from '../Utilities/UtilityFunctions';

interface IProps {
    toggleMenu: () => void;
}

export const NavBar = (props: IProps) => {
    return (
        <div className={styles.nav__container}>
            <div className={createClassName([styles.nav__menuButtonContainer, styles.nav__element])}>
                <img 
                    className={styles.nav__menuButton} 
                    src={menu} 
                    alt="Menu Button"
                    onClick={props.toggleMenu}
                />
            </div>

            <div className={createClassName([styles.nav__titleContainer, styles.nav__element])}>To Do</div>

            <div className={createClassName([styles.nav__logInContainer, styles.nav__element])}>Log in/out</div>

        </div>
    );
}