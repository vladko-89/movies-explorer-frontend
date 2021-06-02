import React from 'react';
import InitialForm from '../InitialForm/InitialForm';
import './Login.css';

function Login(props) {
  return (
    <div className="login">
      <InitialForm
        name="login"
        title="Рады видеть!"
        submitText="Войти"
        text="Ещё не зарегистрированы?"
        link="Регистрация"
        path="/signup"
        history={props.history}
        signIn={props.signIn}
        responseError={props.responseError}
        resetResponseError={props.resetResponseError}
      />
    </div>
  );
}

export default Login;