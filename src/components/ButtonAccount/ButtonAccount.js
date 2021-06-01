import React from 'react';
import { Link } from 'react-router-dom';
import account from '../../images/account_icon.svg'
import './ButtonAccount.css';

function ButtonAccount(props) {
  return (
    <Link to='/profile' onClick={props.onClick} className="button-profile">
      Аккаунт <img className="button-profile__icon" src={account} alt="Иконка аккаунта" />
    </Link>
  );
}

export default ButtonAccount;