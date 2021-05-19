import React from 'react';
import Title from '../Title/Title';
import photo from '../../images/aboutMe.webp';

import './AboutMe.css';

function AboutMe() {
  return (
    <section className="profile" id="student">
      <Title text="Студент" />
      <div className="profile__flex-container">
        <div className="profile__cell">
          <p className="profile__name">Виталий</p>
          <p className="profile__profession">Фронтенд-разработчик, 30 лет</p>
          <p className="profile__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="profile__list">
            <li className="profile__item">
              <a className="profile__link" href='http://facebook.com' target="_blank" rel="noreferrer">Facebook</a>
            </li>
            <li className="profile__item">
              <a className="profile__link" rel="noreferrer" href='http://github.com' target="_blank">Github</a>
            </li>
          </ul>
        </div>
        <img src={photo} alt="Фото профиля" className="profile__image" />
      </div>
    </section>
  );
}

export default AboutMe;