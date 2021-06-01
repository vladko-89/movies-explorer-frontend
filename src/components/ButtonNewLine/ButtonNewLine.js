import React from 'react';
import './ButtonNewLine.css';

function ButtonNewLine(props) {
  return (
    <button className="button-line"
      onClick={props.handleClick}
    >
      Ещё</button>
  );
}

export default ButtonNewLine;