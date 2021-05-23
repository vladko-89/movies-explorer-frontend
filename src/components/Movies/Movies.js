import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonNewLine from '../ButtonNewLine/ButtonNewLine';
import './Movies.css';

function Movies() {

  const [cards, setCards] = React.useState([]);
  const [filterCards, setFilterCards] = React.useState([]);

  const [load, setLoad] = React.useState(false);

  function LoadMovie() {
    moviesApi.getMovies()
      .then((res) => {
        setCards(res);
      });
  }


  function filterMovie() { }

  return (
    <section className="movies">
      <SearchForm onLoad={LoadMovie} />
      { load ? <Preloader /> :
        <>
          <MoviesCardList cards={cards} />
          <ButtonNewLine />
        </>
      }
    </section>
  );
}

export default Movies;