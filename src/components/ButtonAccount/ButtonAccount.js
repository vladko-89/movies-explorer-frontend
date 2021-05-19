import React from 'react';
import { Link } from 'react-router-dom';
import account from '../../images/account_icon.svg'
import './ButtonAccount.css';

function ButtonAccount() {
  return (
    <Link to='/profile' className="button-profile">
      Аккаунт <img className="button-profile__icon" src={account} alt="Иконка аккаунта" />
    </Link>
  );
}

export default ButtonAccount;