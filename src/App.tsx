import React from 'react';
import './App.css';
import { NavBar } from './Components/Navigation/NavBar';
import { Menu } from './Components/Navigation/Menu';
import { ContentView } from './Components/Content/ContentView';
import { observer } from 'mobx-react';
import { ToDoStore } from './Stores/ToDoStore';

interface IProps {

}

interface IState {
	showMenu: boolean;
}

@observer
class App extends React.Component<IProps, IState> {
	private readonly store: ToDoStore;
	constructor(props: IProps) {
		super(props);
		this.store = new ToDoStore();

		this.state = { showMenu: false };
	}

	private handleToggleMenu = () => {
		this.setState({ showMenu: !this.state.showMenu });
	}

  	public render() {
    	const menuOptions = ['Home', 'Settings'];

		return (
			<div className="App">
				<NavBar toggleMenu={this.handleToggleMenu} />
				<Menu 
					menuOptions={menuOptions} 
					toggleMenu={this.handleToggleMenu}
					showMenu={this.state.showMenu}
				/>
				<ContentView store={this.store}/>
			</div>
		);
	}
}

  

export default App;
