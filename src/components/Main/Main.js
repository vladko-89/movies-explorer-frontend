import React from 'react';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Tech from '../Tech/Tech';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import './Main.css';

function Main(props) {
  return (
    <main className="main">
      <Promo />
      <NavTab onScroll={props.onScroll} />
      <AboutProject />
      <Tech />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;