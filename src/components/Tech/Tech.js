import React from 'react';
import Title from '../Title/Title';
import './Tech.css';

function Tech(props) {
  return (
    <section className="technologies" id={"technologies"}>
      <div className="technologies__container">
        <Title text="Технологии" />
        <p className="technologies__title">7 технологий</p>
        <p className="technologies__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="technologies__list">
          <li className="technologies__item">
            <span className="technologies__span">HTML</span>
          </li>
          <li className="technologies__item">
            <span className="technologies__span">CSS</span>
          </li>
          <li className="technologies__item">
            <span className="technologies__span">JS</span>
          </li>
          <li className="technologies__item">
            <span className="technologies__span">React</span>
          </li>
          <li className="technologies__item">
            <span className="technologies__span">Git</span>
          </li>
          <li className="technologies__item">
            <span className="technologies__span">Express.js</span>
          </li>
          <li className="technologies__item">
            <span className="technologies__span">mongoDB</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Tech;