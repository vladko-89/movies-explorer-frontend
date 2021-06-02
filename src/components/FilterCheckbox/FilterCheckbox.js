import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {

  function handleClick() {
    props.onCheck();
  }

  return (
    <div className="checkbox" >
      <input type="checkbox" className={`checkbox__input ${props.check && "checkbox__input_active"}`} name="short" id="shortMovies" onClick={handleClick} />
      <label className="checkbox__label" htmlFor="shortMovies">
        {props.text}
      </label>
    </div>
  );
}

export default FilterCheckbox;