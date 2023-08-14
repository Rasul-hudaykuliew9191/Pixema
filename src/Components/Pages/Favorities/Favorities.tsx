import { FC } from 'react';
import { useSelector } from 'react-redux';
import { MovieState } from '../../../ReduxStore/favorities/interfaces';
import { Card } from '../../Card/Card';
import  favorite from '../../../assets/favoroties/Icon-favorite.png';
import './Favorities.scss';



export const Favorities: FC = () => {
    const favoriteMovies = useSelector(
        (state: MovieState) => state.favoriteMovies
      );
    
    return (
        <header>
           <div className='favorities'>
            {favoriteMovies.length === 0 ? <div className='favorities__img'><img src={favorite} alt="" /></div> : 
                favoriteMovies.map((movie) => (
                    <div className="favorities__body">
                        <Card 
                            image={movie.Poster} 
                            titleFilm={movie.Title} 
                            yearFilm={movie.Year}
                            id={movie.imdbID}
                            rating={movie.imdbRating}
                        />
                    </div>
                ))
            }
        </div>
        </header>
    )
};
