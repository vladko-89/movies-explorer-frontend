import React from 'react';
import { useHistory } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound(props) {
  const history = useHistory();

  function pushBack() {
    history.goBack();
  }

  return (
    <div className="empty-page">
      <div className="empty-page__container" >
        <h2 className="empty-page__title">404</h2>
        <p className="empty-page__paragraph">Страница не найдена</p>
      </div>
      <button  onClick={pushBack} className="empty-page__link">Назад</button>
    </div>
  );
}

export default PageNotFound;