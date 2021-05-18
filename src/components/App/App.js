import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './App.css';
import '../../vendor/fonts/fonts.css';

function App() {

  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = React.useState(false);

  const history = useHistory();

  function redirect() {
    history.push('/movies');
  }

  function anchorScroll(anchor) {
    if (anchor) {
      let anchorElement = document.getElementById(anchor);
      anchorElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function openBurgerMenu() {
    setBurgerMenuIsOpen(true);
  }

  function closeBurgerMenu() {
    setBurgerMenuIsOpen(false);
  }

  return (
    <div className="page">
      <Route path="(/|/movies|/saved-movies|/profile)">
        <Header onBurgerMenu={openBurgerMenu} />
      </Route>
      <Switch>
        <Route exact path='/' >
          <Main
            onScroll={anchorScroll} />
        </Route>
        <Route path='/movies' exact>
          <Movies />
        </Route>
        <Route path='/saved-movies' exact>
          <SavedMovies />
        </Route>
        <Route path='/profile' exact>
          <Profile />
        </Route>
        <Route path="/signup" exact>
          <Register history={redirect} />
        </Route>
        <Route path="/signin" exact>
          <Login history={redirect} />
        </Route>
        <Route render={PageNotFound} />
      </Switch>
      <Route path="(/|/movies|/saved-movies)">
        <Footer />
      </Route>
      <BurgerMenu
        isOpen={burgerMenuIsOpen}
        isClose={closeBurgerMenu}
      />
    </div>
  );
}

export default App;
