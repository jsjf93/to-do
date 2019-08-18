import React from 'react';
import styles from './Menu.module.css';
import close from './close-icon.svg';
import { Link } from 'react-router-dom';

export interface IMenuItem {
    link: string;
    title: string;
}

interface IProps {
    menuOptions: IMenuItem[];
    toggleMenu: () => void;
    showMenu: boolean;
}

export const Menu = (props: IProps) => {
    const containerClassName = props.showMenu 
        ? [styles.menu__container, styles.menu__container__fromLeft, styles.menu__container__visible].join(' ')
        : [styles.menu__container, styles.menu__container__fromLeft].join(' ');

    return (
        <div className={containerClassName}>
            <img 
                className={styles.menu__closeButton} 
                src={close} 
                alt="Close Button"
                onClick={props.toggleMenu}
            />
            <nav>
                <div className={styles.menu__listContainer}>
                    {props.menuOptions.map((m, key) => (
                        <Link 
                            to={m.link} 
                            key={key} 
                            className={styles.menu__listItem}
                        >
                            {m.title}
                        </Link>
                    ))}
                </div>

            </nav>
        </div>
    )
}