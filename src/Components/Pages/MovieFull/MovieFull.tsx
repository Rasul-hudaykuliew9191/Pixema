import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getMovieId } from '../../../api/getMovie';
import { useAppContext } from "../../../Context/AppContext";
import { Cell } from "./Cell";
import { useSelector } from "react-redux";
import { MovieState } from "../../../ReduxStore/favorities/interfaces";
import { addDeleteToFavorites } from "../../../ReduxStore/favorities/actions";
import './MovieFull.scss';


export interface IMovie {
  Actors:string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings:any []
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}
  
  export const MovieFull: React.FC = () => {
    const [movie, setMovie] = useState<IMovie|null>(null);
    const { id } = useParams<{ id: string }>();
    
    useEffect(() => {
      const fetchMovie = async () => {
        if (id !== undefined) {
          const data = await getMovieId(id);
          console.log(data)
          setMovie(data);
        }
      };
      fetchMovie();
    },[id]);

    const dispatch = useDispatch()
    const handleAddDeleteToFavorites = () => {
      if (movie) {
        dispatch(addDeleteToFavorites(movie));
      }
    };

    const{isDarkTheme}=useAppContext()

    const isFavoriteMovie = (movie: IMovie|null): boolean => {
      return favoriteMovies.some((favMovie) => favMovie.imdbID === movie?.imdbID);
    };
    
    const favoriteMovies = useSelector(
      (state: MovieState) => state.favoriteMovies
    );
     
    return (
      <div className="move-full">
        <div className="move-full__image">
          <div className="move-full__image-box">
            {movie && (
              <img src={movie.Poster} alt={movie.Title} />
            )}
          </div>
          <button onClick={handleAddDeleteToFavorites} 
                  className={`move-full__button ${isFavoriteMovie(movie) ? 'move-full__button--delete' : 'move-full__button--add'}`}>
                  {isFavoriteMovie(movie) ? 'Удалить' : 'Добавить' }
          </button>
        </div>
        <div className="move-full__info">
              <h2 className='move-full__genre'>{movie?.Genre.split(',').join(' •')}</h2>
              <h1 className={isDarkTheme()?'move-full__title--light':'move-full__title'}>{movie?.Title}</h1>
              <div className='move-full__numbers'>
                  <div className="move-full__rating">{movie?.imdbRating}</div>
                  <div className="move-full__imd-rating">IMDb {movie?.imdbRating}</div>
                  <div className="move-full__imd-time">{movie?.Runtime}</div>
              </div>
              <p className={isDarkTheme()?'move-full__description--light':'move-full__description'}>{movie?.Plot}</p>
              <table className='move-full__list'>
                  <Cell type='Year' info={movie?.Year}/>
                  <Cell type='Released' info={movie?.Released}/>
                  <Cell type='BoxOffice' info={movie?.BoxOffice}/>
                  <Cell type='Country' info={movie?.Country}/>
                  <Cell type='Production' info={movie?.Production}/>
                  <Cell type='Actors' info={movie?.Actors}/>
                  <Cell type='Director' info={movie?.Director}/>
                  <Cell type='Writers' info={movie?.Writer}/>
              </table>
        </div>
      </div>
    );
  };


