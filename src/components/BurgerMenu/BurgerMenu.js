import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAccount from '../ButtonAccount/ButtonAccount';
import './BurgerMenu.css';

function BurgerMenu(props) {
  return (
    <div className={`burger ${props.isOpen ? 'burger_show' : ''}`}>
      <div className="burger__menu">
        <ul className="burger__list-auth">
          <li className="burger__item">
            <Link to='/'
              className="burger__link"
              onClick={props.onClose}>
              Главная
              </Link>
          </li>
          <li className="burger__item">
            <Link to='/movies'
              onClick={props.onClose} className="burger__link">
              Фильмы
            </Link>
          </li>
          <li className="burger__item">
            <Link to='/saved-movies'
              onClick={props.onClose}
              className="burger__link">
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
        <ButtonAccount onClick={props.onClose} />
      </div>
      <button type="button" onClick={props.onClose} className="burger__button-close" />
    </div>
  );
}

export default BurgerMenu;
