import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import search from '../../images/search_icon.svg'
import './SearchForm.css';

function SearchForm(props) {

  const [searchInput, setSearchInput] = React.useState('');

  function handleChangeSearch(e) {
    setSearchInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onLoad();
  }
  return (
    <form className="form-search" onSubmit={handleSubmit}>
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
      <FilterCheckbox text="Короткометражки" />
    </form>
  )
}

export default SearchForm;