import {MAIN_URL} from './constants';
import { getResponse } from './utils';

// ПОЛЬЗОВАТЕЛИ
export const register = (email, password, name) => {
  return fetch(`${MAIN_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
  })
    .then(getResponse)
    .then((res) => {
      return res;
    })
};
export const login = (email, password) => {
  return fetch(`${MAIN_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(getResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);

        return data;
      }
    })
};
export const checkToken = (token) => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => res.json())
    .then(data => data)
}

export const getUserInfo = () => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  })
    .then(getResponse);
}

export const editUserInfo = (data) => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email
    })
  })
    .then(getResponse);
}

// СОХРАНЕННЫЕ ФИЛЬМЫ
export const addCard = ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailer,
  nameRU,
  nameEN,
  thumbnail,
  movieId 
  }) => {
  return fetch(`${MAIN_URL}/movies`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      nameRU,
      nameEN,
      thumbnail,
      movieId
    }),
  })
    .then(getResponse)
}

export const getMovies = () => {
  return fetch(`${MAIN_URL}/movies`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  })
    .then(getResponse);
}

export const deleteMovies = (movieId) => {
  return fetch(`${MAIN_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  })
    .then(getResponse);
}


