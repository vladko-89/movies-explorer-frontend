import React from 'react';
import { Route, Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './InitialForm.css';


function InitialForm(props) {
  const [nameInput, setNameInput] = React.useState('Виталий');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('pochta@yandex.ru');

  function handleChangeName(e) {
    setNameInput(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmailInput(e.target.value);
  }

  function handleChangePassword(e) {
    setPasswordInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.history();
  }

  return (
    <form className="initial-form" name={`${props.name}-form`} onSubmit={handleSubmit}>
      <div className="initial-form__container">
        <div className="initial-form__header">
          <Logo />
          <h2 className="initial-form__title">{props.title}</h2>
        </div>
        <ul className={`${props.name}__list initial-form__list`}>
          <Route path="/signup">
            <li className="initial-form__item">
              <label className="initial-form__label" htmlFor="name">Имя</label>
              <input type="text"
                id="name"
                className="initial-form__input"
                value={nameInput}
                required
                onChange={handleChangeName}
              />
              <span className="initial-form__error" id="input-error">Что-то пошло не так...</span>
            </li>
          </Route>
          <li className="initial-form__item">
            <label className="initial-form__label" htmlFor="email">E-mail</label>
            <input type="email"
              id="email"
              className="initial-form__input"
              value={emailInput}
              required
              onChange={handleChangeEmail}
            />
            <span className="initial-form__error" id="input-error">Что-то пошло не так...</span>
          </li>
          <li className="initial-form__item">
            <label className="initial-form__label" htmlFor="password">Пароль</label>
            <input type="password"
              id="password"
              className="initial-form__input"
              minLength="8"
              required
              value={passwordInput}
              onChange={handleChangePassword}
            />
            <span className="initial-form__error" id="input-error">Что-то пошло не так...</span>
          </li>
        </ul>
      </div>
      <div className="initial-form__container">
        <button type="submit" className="initial-form__button initial-form__button_view_submit">{props.submitText}</button>
        <p className="initial-form__text">{props.text} <Link to={`${props.path}`} className="initial-form__link">{props.link}</Link></p>
      </div>

    </form>
  );
}

export default InitialForm;
