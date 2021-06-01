import React from 'react';
import { Route, Link } from 'react-router-dom';
import {useFormWithValidation} from '../../hooks/useForm';
import Logo from '../Logo/Logo';
import './InitialForm.css';


function InitialForm(props) {
  const {values, handleChange, errors, isValid} = useFormWithValidation();

  React.useEffect(() => {
    props.resetResponseError();
  }, [])

  function handleSubmit(e) {

    e.preventDefault();
    props.resetResponseError();

    if (props.signUp) {
      props.signUp(values);
    } else {
      props.signIn(values.email, values.password);
    }
    
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
                pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                name="name"
                className="initial-form__input"
                value={values.name || ""}
                required
                minLength='1' 
                maxLength='30'
                onChange={handleChange}
              />
              <span className="initial-form__error" id="input-error">{errors.name || ""}</span>
            </li>
          </Route>
          <li className="initial-form__item">
            <label className="initial-form__label" htmlFor="email">E-mail</label>
            <input type="email"
              id="email"
              name="email"
              className="initial-form__input"
              value={values.email || ""}
              required
              onChange={handleChange}
              autoComplete="current-password"
            />
            <span className="initial-form__error" id="input-error">{errors.email || ""}</span>
          </li>
          <li className="initial-form__item">
            <label className="initial-form__label" htmlFor="password">Пароль</label>
            <input type="password"
              id="password"
              name="password"
              className="initial-form__input"
              minLength="8"
              required
              value={values.password || ""}
              onChange={handleChange}
            />
            <span className="initial-form__error" id="input-error">{errors.password || ""}</span>
          </li>
        </ul>
      </div>
      <div className="initial-form__container">
      <span className={`initial-form__response-error ${props.responseError.error && "initial-form__response-error_active"}`}  >{props.responseError.error}</span>
        <button 
        type="submit" 
        className={`initial-form__button ${!isValid ? "initial-form__button_disabled" : ""} initial-form__button_view_submit`}
        disabled={!isValid}>
          {props.submitText}
        </button>
        <p className="initial-form__text">{props.text} <Link to={`${props.path}`} className="initial-form__link">{props.link}</Link></p>
      </div>

    </form>
  );
}

export default InitialForm;
