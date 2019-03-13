import React, { Component } from 'react';
import {  Switch, Route,BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Menu from './components/menu';
import route from './route';

class App extends Component {
  showContent =(routes) => {
    var result = null
    if (routes.length >0) {
      result = route.map( (route,index) => {
       return <Route 
          key ={index}
          path = {route.path}
          exact= {route.exact}
          component={route.main}
        />
      })
    }
    return <Switch >{result}</Switch>
  }
  render() {
    return (
      <Router >
      <div className="App">
        <Menu />
        <div className="container">
          <div className="row">
           {this.showContent(route)} 
          </div>
        </div>


      </div>
      </Router>
    );
  }
}

export default App;
