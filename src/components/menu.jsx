import React, { Component } from 'react';
class Menu extends Component {
  render() {
    return (
        <div className="navbar navbar-default">
          <a className="navbar-brand" >CALL API</a> <ul className="nav navbar-nav"> <li class="active">
            <a >Trang Chu</a>
          </li>
            <li>
              <a >Quan Li San Pham</a>
            </li>
          </ul>
        </div>
    );
  }
}

export default Menu;
