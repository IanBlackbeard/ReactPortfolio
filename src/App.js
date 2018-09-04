import React, { Component } from 'react';
import { BrowserRouter as 
	Router, 
	Route, 
	Switch, 
	Link, 
	NavLink, 
	HashRouter} from "react-router-dom";
import { Button } from 'reactstrap';
// import "./pages/Home/Home.css";

//components
import NavBar from "./components/NavBar";

//pages
import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import Contact from "./pages/Contact";

//Styling
// import './App.css';
// import logo from './logo.svg';

class App extends Component {
  render() {
    return (
	<div>

		<NavBar>
      	</NavBar>

		<HashRouter>
	        <div className="content">
	          <Route exact path="/" component={Home}/>
	          <Route path="/stuff" component={Stuff}/>
	          <Route path="/contact" component={Contact}/> 
			</div>
	    </HashRouter>

    </div>
    );
  }
}

export default App;
