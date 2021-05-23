import React from 'react';
import { Route } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(props) {

  return (
    <header className="header">
      <Logo />
      <Navigation />
      <Route exact path="/(movies|saved-movies|profile)" >
        <div onClick={props.onBurgerMenu} className="header__burger-button"></div>
      </Route>
    </header>
  );
}

export default Header;