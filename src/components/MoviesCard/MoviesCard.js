import React from 'react';
import { Route } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {

  const [buttonActive, setButtonActive] = React.useState(false);

  React.useEffect(() => {
    if (props.card.save) {
      setButtonActive(true);
    }
  }, [])

  function handleMovieSaved() {
    setButtonActive(!buttonActive);
  }

  return (
    <article className="card" key={props.card.id}>
      <img className="card__image" src={props.card.link} alt="Изображение карточки" />
      <div className="card__flex-container">
        <h2 className="card__title">33 слова о дизайне</h2>
        <Route path='/movies'>
          <button onClick={handleMovieSaved} className={`${buttonActive ? 'card__button card__button_active' : 'card__button'}`} />
        </Route>
        <Route path='/saved-movies'>
          <button onClick={handleMovieSaved} className="card__delete" />
        </Route>
      </div>
      <p className="card__text">1ч42м</p>
    </article>
  );
}

export default MoviesCard;