import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className="empty-page">
      <div className="empty-page__container" >
        <h2 className="empty-page__title">404</h2>
        <p className="empty-page__paragraph">Страница не найдена</p>
      </div>
      <Link to="/" className="empty-page__link">Назад</Link>
    </div>
  );
}

export default PageNotFound;