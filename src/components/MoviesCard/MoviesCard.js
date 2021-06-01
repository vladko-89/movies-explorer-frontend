import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {translateDuration} from '../../utils/utils';
import './MoviesCard.css';

function MoviesCard(props) {

  const isSaved = props.savedCards.some((i) => i.movieId === props.card.id);
  const cardSavedButtonClassName = `${isSaved ? 'card__button card__button_active' : 'card__button'}`;

  function handleMovieSaved() {
    if (isSaved) {
      let card = props.savedCards.find(item => item.movieId === props.card.id)
      props.onDelete(card._id)
    } else {
      props.onSave({
        country:String(props.card.country),
        director:String(props.card.director),
        duration:props.card.duration,
        year:props.card.year,
        description:props.card.description,
        image:`https://api.nomoreparties.co${props.card.image.url}`,
        trailer:props.card.trailerLink,
        nameRU:props.card.nameRU,
        nameEN:props.card.nameEN+props.card.id,
        thumbnail:`https://api.nomoreparties.co${props.card.image.url}`,
        movieId:props.card.id
      });
    } 
  }

  function handleMovieDelete() {

    props.onDelete(props.card._id);
    
  }

  return (
    <article className="card" >
      <Switch>
        <Route path='/movies'>
          <a href={props.card.trailerLink} className="card__link" target="_blank" rel="noreferrer">
            <img className="card__image"
            src={`${props.card.image ? `https://api.nomoreparties.co${props.card.image.url}` : 'https://img.tourister.ru/files/1/5/8/2/0/9/3/6/original.jpg'}`} alt={props.card.nameRU} />
          </a>
        </Route>
        <Route path='/saved-movies'>
          <a href={props.card.trailer} className="card__link" target="_blank" rel="noreferrer">
            <img className="card__image"
            src={`${props.card.image ? `${props.card.image}` : 'https://img.tourister.ru/files/1/5/8/2/0/9/3/6/original.jpg'}`} alt={props.card.nameRU} />
          </a>
        </Route>
      </Switch>
      
      <div className="card__flex-container">
        <h2 className="card__title">{props.card.nameRU}</h2>
        <Route path='/movies'>
          <button onClick={handleMovieSaved} className={cardSavedButtonClassName} />
        </Route>
        <Route path='/saved-movies'>
          <button onClick={handleMovieDelete} className="card__delete" />
        </Route>
      </div>
      <p className="card__text">{translateDuration(props.card.duration)}</p>
    </article>
  );
}

export default MoviesCard;