import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__flex-container">
        <span className="footer__span">&#64; 2021</span>
        <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="https://github.com" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;