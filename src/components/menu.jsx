import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

const menus = [
  {
    name: 'Trang Chu',
    to: '/',
    exact: true
  },
  {
    name: 'Quan Ly San Pham',
    to: '/products',
    exact: false
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => {
      var active = match ? 'active' : ''
      return (
        <li className={active}>
          <Link
            to={to}
          > {label}

          </Link>
        </li>
      )
    }} />
};
class Menu extends Component {
  showMenu = (menus) => {
    return menus.map((menu, index) => {
      return (
        <MenuLink
          key={index}
          label={menu.name}
          to={menu.to}
          activeOnlyWhenExact={menu.exact}
        />
      )
    })
  }
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand" >CALL API</a> <ul className="nav navbar-nav">
          {this.showMenu(menus)}
        </ul>
      </div>
    );
  }
}

export default Menu;
