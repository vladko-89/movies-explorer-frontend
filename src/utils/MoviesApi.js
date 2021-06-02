import { MOVIES_URL } from './constants';
import { getResponse } from './utils';


class MoviesApi {

  getMovies() {
    return fetch(`${MOVIES_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(getResponse);
  }
}

const moviesApi = new MoviesApi();
export default moviesApi;
