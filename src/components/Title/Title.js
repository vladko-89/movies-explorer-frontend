import React from 'react';
import './Title.css'

function Title(props) {
  return (
    <h2 className="section-title">{props.text}</h2>
  );
}

export default Title;