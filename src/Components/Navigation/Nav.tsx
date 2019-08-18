import React, { useState } from 'react';
import { NavBar } from './NavBar';
import { Menu, IMenuItem } from './Menu';

export const Nav: React.FC = () => {
    const [showMenu, toggleShowMenu] = useState(false);

    const menuOptions: IMenuItem[] = [
        { link: '/', title: 'Home' },
        { link: 'reports', title: 'Reports' },
    ];

    return (
        <>
            <NavBar toggleMenu={(showMenu: boolean) => toggleShowMenu(showMenu)} />
            <Menu 
                menuOptions={menuOptions} 
                toggleMenu={(showMenu: boolean) => toggleShowMenu(showMenu)}
                showMenu={showMenu}
            />
        </>
    );
};