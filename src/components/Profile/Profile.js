import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <form className="form-profile" name="profile-form">
      <h2 className="form-profile__title">Привет, Виталий!</h2>
      <ul className="form-profile__list">
        <li className="form-profile__item">
          <label className="form-profile__label" for="name">Имя</label>
          <input type="text" id="name" className="form-profile__input" value="Виталий" />
        </li>
        <li className="form-profile__item">
          <label className="form-profile__label" for="email">E-mail</label>
          <input type="email" id="email" className="form-profile__input" value="pochta@yandex.ru" />
        </li>
      </ul>
      <button type="submit" className="form-profile__button form-profile__button_view_submit">Редактировать</button>
      <button type="button" className="form-profile__button form-profile__button_view_exit">Выйти из аккаунта</button>
    </form>
  );
}

export default Profile;