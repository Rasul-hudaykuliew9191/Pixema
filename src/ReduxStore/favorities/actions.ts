import { ADD_DELETE_FAVORITE_MOVIE } from "./actionsTypes";
import { AddDeleteFavoriteMovieAction, Movie } from "./interfaces";


export const addDeleteToFavorites = (movie: Movie): AddDeleteFavoriteMovieAction => ({
    type: ADD_DELETE_FAVORITE_MOVIE,
    movie:movie
});