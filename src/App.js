import React, { Component } from 'react';
import "./app.css";
import Menu from './components/menu';
import Products from './components/products';
class App extends Component {
  render() {
    return (
      <div className="App">

        <Menu />


        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-info mb-10">Them San Pham</button>
            </div>


            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Products />
            </div>

          </div>

        </div>


      </div>
    );
  }
}

export default App;
