import { createStore } from 'redux';
import { AddDeleteFavoriteMovieAction, MovieState } from './interfaces';

const initialState: MovieState = {
  favoriteMovies: [],
};

const movieReducer = (
  state = initialState,
  action: AddDeleteFavoriteMovieAction
): MovieState => {
  switch (action.type) {
      case 'ADD_DELETE_FAVORITE_MOVIE':
      const movieIndex = state.favoriteMovies.findIndex(
        (movie) => movie.imdbID === action.movie.imdbID
      );
      if (movieIndex === -1){
          return {
          ...state,
          favoriteMovies: [...state.favoriteMovies, action.movie],
          };
      } else {
          const updatedFavorites = state.favoriteMovies.filter(
          (movie) => movie.imdbID !== action.movie.imdbID);
          return {
            ...state,
            favoriteMovies: updatedFavorites,
          };
      }
      default:
      return state;
  }
};

export const store = createStore(movieReducer);





