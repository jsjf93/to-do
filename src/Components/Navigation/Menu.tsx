import React, { useRef, useEffect } from 'react';
import styles from './Menu.module.css';
import close from './close-icon.svg';
import { Link } from 'react-router-dom';

export interface IMenuItem {
    link: string;
    title: string;
}

interface IProps {
    menuOptions: IMenuItem[];
    toggleMenu: (showMenu: boolean) => void;
    showMenu: boolean;
}

const useOutsideRefClick = (ref: any, toggleMenu: (showMenu: boolean) => void) => {
    const handleClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            toggleMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    });
};

export const Menu = (props: IProps) => {
    const ref = useRef(null);
    useOutsideRefClick(ref, props.toggleMenu);
    
    const containerClassName = props.showMenu 
        ? [styles.menu__container, styles.menu__container__fromLeft, styles.menu__container__visible].join(' ')
        : [styles.menu__container, styles.menu__container__fromLeft].join(' ');

    return (
        <div className={containerClassName} ref={ref}>
            <img
                className={styles.menu__closeButton} 
                src={close} 
                alt="Close Button"
                onClick={() => props.toggleMenu(false)}
            />
            <nav>
                <div className={styles.menu__listContainer}>
                    {props.menuOptions.map((m, key) => (
                        <Link 
                            to={m.link} 
                            key={key} 
                            className={styles.menu__listItem}
                            onClick={() => props.toggleMenu(false)}
                        >
                            {m.title}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
};