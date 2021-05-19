import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <div className="checkbox">
      <input type="checkbox" className="checkbox__input" name="short" id="shortMovies" />
      <label className="checkbox__label" htmlFor="shortMovies">
        {props.text}
      </label>
    </div>
  );
}

export default FilterCheckbox;