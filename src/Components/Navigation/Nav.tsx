import { NavBar } from './NavBar';
import React from "react";
import { Menu, IMenuItem } from './Menu';

interface IProps {

}

interface IState {
    showMenu: boolean;
}

export class Nav extends React.Component<IProps, IState> {
    constructor(props: IProps) {
		super(props);

		this.state = { showMenu: false };
	}

	private handleToggleMenu = () => {
		this.setState({ showMenu: !this.state.showMenu });
    }
    
    public render() {
        const menuOptions: IMenuItem[] = [
            { link: '/', title: 'Home' },
            { link: 'reports', title: 'Reports' },
        ]
        return (
            <div>
                <NavBar toggleMenu={this.handleToggleMenu} />
                <Menu 
                    menuOptions={menuOptions} 
                    toggleMenu={this.handleToggleMenu}
                    showMenu={this.state.showMenu}
                />
            </div>
        );
    }
}