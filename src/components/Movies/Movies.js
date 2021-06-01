import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonNewLine from '../ButtonNewLine/ButtonNewLine';
import './Movies.css';

function Movies(props) {

  React.useEffect(() => {
    props.resetNothingShow();
    props.onChangeSavedSearchInput("");
  }, [])

  

  function handleClickButtonMore() {
    props.onRenderMovies(props.filteredCards, props.showedCards, props.countCards.more);
  }

  return (
    <section className="movies">
      <SearchForm
        loadedCards={props.loadedCards}
        onLoad={props.onLoad}
        onFilter={props.onFilter}
        check={props.check}
        onCheck={props.onCheck}
        onChangeSearchInput={props.onChangeSearchInput}
      />
      { props.isLoad ? <Preloader /> :
        <>
          <MoviesCardList 
            loadedCards={props.loadedCards}
            showedCards={props.showedCards}
            savedCards={props.savedCards}
            onSave={props.onSave}
            onDelete={props.onDelete}
            check={props.check}
            nothingShow={props.nothingShow}
          />
          {props.filteredCards.length > 0 && props.showedCards.length > 0 && !props.check &&  !props.nothingShow && <ButtonNewLine handleClick={handleClickButtonMore} />}
        </>
      }
    </section>
  );
}

export default Movies;