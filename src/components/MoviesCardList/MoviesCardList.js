import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <>
      {!props.nothingShow ?
        <ul className="movies-list">
        {props.filteredSavedCards && props.filteredSavedCards.length !== 0  ? 
          props.filteredSavedCards.map((card) => (
            <li className={`movies-list__item ${props.check && card.duration > 40 && "movie-list__item_hidden"}`} key={card.id || card._id}>
              <MoviesCard 
              card={card}
              savedCards={props.savedCards}
              onSave={props.onSave}
              onDelete={props.onDelete}
              filteredSavedCards={props.filteredSavedCards}
            />
            </li>
        ))
        : 
        props.showedCards.map((card) => (
          <li className={`movies-list__item ${props.check && card.duration > 40 && "movie-list__item_hidden"}`} key={card.id || card._id}>
            <MoviesCard 
            card={card}
            savedCards={props.savedCards}
            onSave={props.onSave}
            onDelete={props.onDelete}
            filteredSavedCards={props.filteredSavedCards}
          />
          </li>
        ))
        }
      </ul>
      :
      <p className="movies-list__paragraph">Ничего не удалось найти, попробуйте другие ключевые слова</p>
      }
    </>
  );
}

export default MoviesCardList;