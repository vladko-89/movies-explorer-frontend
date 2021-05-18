import React from 'react';
import InitialForm from '../InitialForm/InitialForm';
import './Register.css';

function Register(props) {

  return (
    <div className="regitration">
      <InitialForm
        name="register"
        title="Добро пожаловать!"
        submitText="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="Войти"
        path="/signin"
        history={props.history}
      />
    </div>
  );
}

export default Register;