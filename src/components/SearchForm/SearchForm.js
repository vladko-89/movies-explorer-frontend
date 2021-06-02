import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import search from '../../images/search_icon.svg'
import './SearchForm.css';

function SearchForm(props) {

  const [searchInput, setSearchInput] = React.useState('');


  function handleChangeSearch(e) {
    setSearchInput(e.target.value);
    if (props.onChangeSearchInput) {
      props.onChangeSearchInput(e.target.value);
    }
    
    if (props.onChangeSavedSearchInput) {
      props.onChangeSavedSearchInput(e.target.value);
    }
    
  }

  function handleSubmit(e, string) {
    e.preventDefault();
    if (props.onLoad) {
      if (props.loadedCards.length === 0) {
        props.onLoad(string);
      } else {
        props.onFilter(props.loadedCards, string);
      }
    } else {
      props.onFilterSaved(props.savedCards, string)
    }
    
  }

  return (
    <form className="form-search" onSubmit={(e) => { handleSubmit(e, searchInput) }}>
      <div className="form-search__flex-container">
        <input type="text"
          value={searchInput}
          onChange={handleChangeSearch}
          className="form-search__input"
          placeholder="Фильм"
          required
        />
        <button type="submit" className="form-search__button">
          <img className="form-search__icon" src={search} alt="Иконка поиска"></img>
        </button>
      </div>
      <FilterCheckbox
        text="Короткометражки"
        onCheck={props.onCheck}
        check={props.check}
      />
    </form>
  )
}

export default SearchForm;