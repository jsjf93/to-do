import React from 'react';
import './App.css';
import { ToDoList } from './Components/Content/ToDoList';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from './Components/Navigation/Nav';
import { Reports } from './Components/Content/Reports';

class App extends React.Component {
  	public render() {

		return (
			<div>
				<BrowserRouter>
					<Nav />

					<Route exact path="/" component={ToDoList} />
					<Route exact path="/reports" component={Reports} />
				</BrowserRouter>
			</div>
		);
	}
}

  

export default App;
