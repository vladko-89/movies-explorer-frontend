import React from 'react';
import Title from '../Title/Title';
import './AboutProject.css'

function AboutProject() {
  return (
    <section id={"project"} className="project">
      <Title text="О проекте" />
      <ul className="project__list">
        <li className="project__item">
          <p className="project__subtitle">Дипломный проект включал 5 этапов</p>
          <p className="project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="project__item">
          <p className="project__subtitle">На выполнение диплома ушло 5 недель</p>
          <p className="project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="table">
        <div className="table__cell table__cell_position_left">
          <p className="table__heading table__heading_color_black">1 неделя</p>
          <p className="table__text">Back-end</p>
        </div>
        <div className="table__cell table__cell_position_right">
          <p className="table__heading table__heading_color_white">4 недели</p>
          <p className="table__text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;