import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonNewLine from '../ButtonNewLine/ButtonNewLine';
import './Movies.css';

function Movies() {

  const [load, setLoad] = React.useState(false);

  function LoadMovie() {
    setTimeout(setLoad(!load), 2000);
  }

  return (
    <section className="movies">
      <SearchForm onLoad={LoadMovie} />
      { load ? <Preloader /> :
        <>
          <MoviesCardList />
          <ButtonNewLine />
        </>
      }
    </section>
  );
}

export default Movies;