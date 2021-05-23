import React from 'react';
import { Route } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {

  const [buttonActive, setButtonActive] = React.useState(false);



  function handleMovieSaved() {
    setButtonActive(!buttonActive);
  }

  function time(n) {
    if (n >= 60) {
      return `${Math.floor(n / 60)} ч ${n % 60} м`
    }
    return `${n} м`
  }

  return (
    <article className="card" key={props.card.id}>
      <img className="card__image"
        src={`${props.card.image ? `https://api.nomoreparties.co${props.card.image.url}` : 'https://img.tourister.ru/files/1/5/8/2/0/9/3/6/original.jpg'}`} alt={props.card.nameRU} />
      <div className="card__flex-container">
        <h2 className="card__title">{props.card.nameRU}</h2>
        <Route path='/movies'>
          <button onClick={handleMovieSaved} className={`${buttonActive ? 'card__button card__button_active' : 'card__button'}`} />
        </Route>
        <Route path='/saved-movies'>
          <button onClick={handleMovieSaved} className="card__delete" />
        </Route>
      </div>
      <p className="card__text">{time(props.card.duration)}</p>
    </article>
  );
}

export default MoviesCard;