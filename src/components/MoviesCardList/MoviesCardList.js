import React from 'react';
import { cards } from '../../utils/data';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <ul className="movies-list">
      {props.cards.map((card, i) => (
        <li className="movies-list__item">
          <MoviesCard key={card.id} card={card} />
        </li>
      ))}
    </ul>
  );
}

export default MoviesCardList;