import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonEntrance.css';

function ButtonEntrance() {
  return (
    <Link to='/signin' className="button-entry">Войти</Link>
  );
}

export default ButtonEntrance;
