import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ButtonAccount from '../ButtonAccount/ButtonAccount';
import ButtonEntrance from '../ButtonEntrance/ButtonEntrance';
import './Navigation.css';

function Navigation(props) {
  return (
    <nav className="navigation">
      <Switch>
        <Route exact path='/'>
          <ul className="navigation__list-auth">
            <li className="navigation__item">
              <Link to='/signup' className="navigation__link navigation__link_reg">Регистрация</Link>
            </li>
          </ul>
          <ButtonEntrance />
        </Route>
        <Route path="/(movies|saved-movies|profile)">
          <div className="navigation__container">
            <ul className="navigation__list-auth">
              <li className="navigation__item">
                <Link to='/movies' className="navigation__link">Фильмы</Link>
              </li>
              <li className="navigation__item">
                <Link to='/saved-movies' className="navigation__link">Сохраненные фильмы</Link>
              </li>
            </ul>
            <ButtonAccount />
          </div>
        </Route>
      </Switch>
    </nav>
  );
}

export default Navigation;