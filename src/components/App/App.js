import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
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
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import moviesApi from '../../utils/MoviesApi';
import {register, login, checkToken, getUserInfo, addCard, getMovies, deleteMovies, editUserInfo} from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import '../../vendor/fonts/fonts.css';

function App() {
  const history = useHistory();
  const location = useLocation();

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isAuthChecking, setIsAuthChecking] = React.useState(true);

  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = React.useState(false);

  const [loadedCards, setLoadedCards] = React.useState([]);
  const [filteredCards, setFilteredCards] = React.useState([]);
  const [filteredSavedCards, setFilteredSavedCards] = React.useState([]);
  const [showedCards, setShowedCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);

// Состояние ширины вьюпорта и  количество карточек для рендера
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [countCardsShow, setCountCardsShow] = React.useState({});


  const [isLoad, setIsLoad] = React.useState(false);
  // Состояние чекбокса SearchForm
  const [check, setCheck] = React.useState(false);

  // Пустой результат поиска
  const [nothingShow, setNothingShow] = React.useState(false);

  // Сщстояние строки поиска в SavedMovies
  const [savedSearchInput, setSavedSearchInput] = React.useState('');

  // Состояние ответа сервера на запросы к MainApi
  const [responseError, setResponseError] = React.useState({});

  




  function resetNothingShow() {
    setNothingShow(false);
  }


  React.useEffect(() => {
    checkLogin();

    window.addEventListener('resize', () => {
      setTimeout(setWindowWidth(window.innerWidth), 3000)
    });
    return () => {
      window.removeEventListener('resize', () => {
        setTimeout(setWindowWidth(window.innerWidth), 3000)
      });
    }
  }, []);

  React.useEffect(() => {
    
    if (windowWidth >= 1140) {
      setCountCardsShow({show: 16, more: 4});
    }  else if (windowWidth > 910 && window.innerWidth < 1140 ) {
      setCountCardsShow({show: 12, more: 3});
    } else if (windowWidth > 500 && window.innerWidth < 910 ) {
      setCountCardsShow({show: 8, more: 2});
    } else {
      setCountCardsShow({show: 5, more: 2});
    }
  }, [windowWidth]);


  function changeSavedSearchInput(value) {
    setSavedSearchInput(value)
  }


  React.useEffect(() => {
    if (loggedIn) {
      if (check && localStorage.filteredMovies && localStorage.filteredMovies.length > 0) {
        const movies = JSON.parse(localStorage.filteredMovies).filter((item) => item.duration < 40);
        setShowedCards(movies);
      } else if (localStorage.filteredMovies) {
        renderMovies(JSON.parse(localStorage.filteredMovies), [], countCardsShow.show)
      }
    }
    
  }, [loggedIn, check, countCardsShow.show])

  React.useEffect(() => {
    if (loggedIn) {
      getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [loggedIn])

  React.useEffect(() => {
    if (loggedIn) {
      getSavedMovies();
      if (localStorage.filteredMovies) {
        renderMovies(JSON.parse(localStorage.filteredMovies), [], countCardsShow.show)
      } 
    }
    }, [loggedIn, currentUser._id])

  // Загружаем карточки с MoviesApi
  function loadMovies(string, check) {
    setIsLoad(true);
    moviesApi.getMovies()
      .then((res) => {
        setLoadedCards(res);
        filterMovie(res, string, check);
        setIsLoad(false);

      })
      .catch((err) => {
        console.log(err);
      })
  }

  // Фильтруем карточки на Movies
  function filterMovie(arr, string) {
    
    const str = string.toLowerCase();
    const regExp = new RegExp(`${str}`, 'g');
    let movies = [];
    movies = arr.filter((card) => {
      return (String(card.nameRU).toLowerCase().match(regExp) || String(card.nameEN).toLowerCase().match(regExp) || String(card.director).toLowerCase().match(regExp));
    })
    if (movies.length === 0) {

      setNothingShow(true);
      setShowedCards([]);
      
    } else {
      setNothingShow(false);
      localStorage.setItem('filteredMovies', JSON.stringify(movies));
      if (check) {
        const cards = JSON.parse(localStorage.filteredMovies).filter((item) => item.duration < 40);
        setShowedCards(cards);
      } else {
        renderMovies(movies, [], countCardsShow.show);
      }
    }
  }

  // Фильтруем карточки на SavedMovies
  function filterSavedMovie(arr, string) {
    
    const str = string.toLowerCase();
    const regExp = new RegExp(`${str}`, 'g');
    let movies = [];

      movies = arr.filter((card) => {
      return (String(card.nameRU).toLowerCase().match(regExp) || String(card.nameEN).toLowerCase().match(regExp) || String(card.director).toLowerCase().match(regExp));
    })
    if (movies.length === 0) {
      setNothingShow(true);
    } else {
      setNothingShow(false);
      setFilteredSavedCards(movies);
    }
  }

  function resetFilterSavedMovies() {
    setFilteredSavedCards([]);
  }

  function getSavedMovies() {
    getMovies()
    .then((res) => {
      const movies = res.filter(
        (item) => item.owner === currentUser._id
      )
      setSavedCards(movies);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function saveMovies({country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId}) {
      addCard({country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        nameRU,
        nameEN,
        thumbnail,
        movieId})
        .then((res) => {
          setSavedCards([...savedCards, res]);
        })
        .catch((err) => {
          console.log(err);
        })
  }

  function deleteSavedMovie(id) {
    deleteMovies(id)
    .then((res) => {
      const newMovies = savedCards.filter((newMovie) => 
        newMovie._id !== id
      );
      setSavedCards(newMovies);
      if (savedSearchInput) {
        filterSavedMovie(newMovies, savedSearchInput)
      }
    })

    .catch((err) => {console.log(err)})
  }

  function checkedFilter() {
    setCheck(!check);
  }
  // Компонуем массив для вывода карточек и массив отфильтрованных
  function renderMovies(arr, cards, count) {
    if (arr.length > 0) {
      setShowedCards([...cards, ...arr.splice(0, count)]);
      setFilteredCards([...arr]);
    }
  }

  function handleRegister(data) {
    register(data.email, data.password, data.name).then((res) => {
          console.log(res);
          handleLogin(data.email, data.password);
      })
        .catch((err) => {
          if (err.indexOf(409)) {
            setResponseError({error:"Пользователь с таким Email уже существует!"});
          } else {
            setResponseError({error:"При регистрации пользователя произошла ошибка!"});
          }
        })
  }

  function handleLogin(email, password) {
    login(email, password)
      .then((newData) => {
        if (newData.token) {
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
      if (err.indexOf(401)) {
        setResponseError({error:"Неправильно указан Email или password!"});
      } else {
        setResponseError({error:"При регистрации пользователя произошла ошибка!"});
      }
      })
  }

  function handleEditUserInfo(data) {
    
    editUserInfo(data)
    .then((res) => {
      console.log(res)
      setCurrentUser({name: res.name, email: res.email, _id: res._id});
      getSavedMovies();
      setResponseError({message:"Данные успешно обновлены"})
    })
    .catch((err) => {
      if (err.indexOf(409)) {
        setResponseError({error:"Пользователь с таким Email уже существует!"});
      } else {
        setResponseError({error:"При регистрации пользователя произошла ошибка!"});
      }
    })
  }

  function checkLogin() {
    setIsAuthChecking(true);
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      checkToken(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          
          history.push(location)

        }
      })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsAuthChecking(false));
    } else {
      setIsAuthChecking(false);
    }
  }

  function logOut() {
    setNothingShow(false);
    setFilteredCards([]);
    setLoadedCards([]);
    setShowedCards([]);
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('filteredMovies');
    
    history.push('/');
  }

  function resetResponseErrors() {
    setResponseError('');
  }
  
  function redirect() {
    history.push('/movies');
  }

  function openBurgerMenu() {
    setBurgerMenuIsOpen(true);
  }

  function closeBurgerMenu() {
    setBurgerMenuIsOpen(false);
  }

    return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Route path="(/|/movies|/saved-movies|/profile)">
          <Header onBurgerMenu={openBurgerMenu} loggedIn={loggedIn} />
        </Route>
        <Switch>
          <Route exact path='/' >
            <Main />
          </Route>
          <ProtectedRoute path='/movies' exact 
            component={Movies}
            filteredCards={filteredCards}
            showedCards={showedCards}
            countCards={countCardsShow}
            loadedCards={loadedCards}
            savedCards={savedCards}
            onRenderMovies={renderMovies}
            onLoad={loadMovies}
            onSave={saveMovies}
            onFilter={filterMovie}
            onDelete={deleteSavedMovie}
            isLoad={isLoad}
            isChecking={isAuthChecking}
            loggedIn={loggedIn}
            check={check}
            onCheck={checkedFilter}
            nothingShow={nothingShow}
            resetNothingShow={resetNothingShow}
            onChangeSavedSearchInput={changeSavedSearchInput}
          />
          <ProtectedRoute path='/saved-movies' exact 
            component={SavedMovies}
            filteredCards={filteredCards}
            showedCards={savedCards}
            countCards={countCardsShow}
            loadedCards={loadedCards}
            savedCards={savedCards}
            filteredSavedCards={filteredSavedCards}
            onRenderMovies={renderMovies}
            onFilterSaved={filterSavedMovie}
            onDelete={deleteSavedMovie}
            isLoad={isLoad}
            isChecking={isAuthChecking}
            loggedIn={loggedIn}
            check={check}
            onCheck={checkedFilter}
            onChangeSavedSearchInput={changeSavedSearchInput}
            nothingShow={nothingShow}
            resetFilter={resetFilterSavedMovies}
            resetNothingShow={resetNothingShow}

          />
          <ProtectedRoute path='/profile' exact
            component={Profile}
            logOut={logOut}
            loggedIn={loggedIn}
            isChecking={isAuthChecking}
            onEditInfo={handleEditUserInfo}
            responseError={responseError}
            resetResponseError={resetResponseErrors}
            />
          <Route path="/signup" exact>
            <Register 
            history={redirect}
            signUp={handleRegister}
            responseError={responseError}
            resetResponseError={resetResponseErrors}
            />
          </Route>
          <Route path="/signin" exact>
            <Login history={redirect}
            signIn={handleLogin}
            responseError={responseError}
            resetResponseError={resetResponseErrors}
            />
          </Route>
          <Route path="*" >
            <PageNotFound/>
          </Route>
        </Switch>
        <Route path="(/|/movies|/saved-movies)">
          <Footer />
        </Route>
        <BurgerMenu
          isOpen={burgerMenuIsOpen}
          onClose={closeBurgerMenu}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
