import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies(props) {

  React.useEffect(() => {
   // props.changePath('/saved-movies')
    props.resetFilter();
    props.resetNothingShow();
    props.onChangeSavedSearchInput("");
    

  }, [])


  return (
    <section className="movies">
      <SearchForm
      onFilter={props.onFilter}
      onFilterSaved={props.onFilterSaved}
      check={props.check}
      onCheck={props.onCheck}
      onChangeSavedSearchInput={props.onChangeSavedSearchInput}
      savedCards={props.savedCards}
    />
      { props.isLoad ? <Preloader /> :
        <MoviesCardList
        showedCards={props.showedCards}
        savedCards={props.savedCards}
        filteredSavedCards={props.filteredSavedCards}
        onDelete={props.onDelete}
        check={props.check}
        nothingShow={props.nothingShow}
      />
      }
    </section>
  );
}

export default SavedMovies;