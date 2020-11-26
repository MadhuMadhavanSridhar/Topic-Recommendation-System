import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import ML_Output from "./ML_Output";
import Output from "./Output";
 
class Main extends Component {
  render() {
    return (
          <HashRouter>
        <div>
          <h1>Topic Recommendation application</h1>
          <ul className="header">
  
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/stuff">ML_Output</NavLink></li>
          <li><NavLink to="/contact">Output</NavLink></li>
          </ul>
          <div className="content"> 
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={ML_Output}/>
            <Route path="/contact" component={Output}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;