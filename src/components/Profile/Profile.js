import React from 'react';
import './Profile.css';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {useFormWithValidation} from '../../hooks/useForm';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const {values, handleChange, errors, isValid, setIsValid, setValues} = useFormWithValidation();

  React.useEffect(() => {
    props.resetResponseError();
  }, [])


  React.useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [currentUser, setValues]);

  React.useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsValid(false);
    }
  }, [setIsValid, currentUser, values])

  function handleSubmit(e) {
    props.resetResponseError();
    e.preventDefault();
    props.onEditInfo(values);

  }
  return (
    <form className="form-profile" name="profile-form" onSubmit={handleSubmit}>
      <h2 className="form-profile__title">Привет, {currentUser.name}!</h2>
      <ul className="form-profile__list">
        <li className="form-profile__item">
          <label className="form-profile__label" htmlFor="name">Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
            required
            className="form-profile__input"
            value={values.name || ''}
            onChange={handleChange}
          />
          <span className="form-profile__error" id="input-error">{errors.name || ""}</span>
        </li>
        <li className="form-profile__item">
          <label className="form-profile__label" htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="form-profile__input"
            value={values.email || ''}
            onChange={handleChange}
          />
          <span className="form-profile__error" id="input-error">{errors.email || ""}</span>
        </li>
      </ul>
      <span className={`form-profile__response-error ${props.responseError.message && "form-profile__response-message"}`}  >{props.responseError.error || props.responseError.message}</span>
      {!isValid ?
        <button type="button"
          className="form-profile__button form-profile__button_view_submit form-profile__button_disabled"
          disabled
        >
          Редактировать
        </button>
      :
          <button type="submit"
          className="form-profile__button form-profile__button_undisabled"
        >
          Сохранить
        </button>
      }
      
      <button type="button" className="form-profile__button form-profile__button_view_exit" onClick={props.logOut}>Выйти из аккаунта</button>
    </form>
  );
}

export default Profile;