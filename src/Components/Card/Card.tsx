import { FC } from 'react';
import { useAppContext } from '../../Context/AppContext';
import { Link } from 'react-router-dom';
import { MovieState } from '../../ReduxStore/favorities/interfaces';
import { useSelector } from 'react-redux';
import heartRating from '../../assets/favoroties/heart.svg';
import Rating  from '../../assets/rating/Path.png';
import './Card.scss';


interface ICard {
    image:string;
    titleFilm:string;
    yearFilm:string;
    rating?:string;
    id?:string;
}

export const Card: FC<ICard> = ({image,titleFilm,yearFilm,rating='',id}) => {
    const{isDarkTheme}=useAppContext()
    const favoriteMovies = useSelector(
        (state: MovieState) => state.favoriteMovies
    );

    const isFavoriteMovie = (id:string|undefined): boolean => {
        return favoriteMovies.some((favMovie) => favMovie.imdbID === id);
      };
    
    return (
        <>
            <div className='card'>
                <div className="card__body">
                    <div className="card__img-box">
                        <Link to={`/Movies/${id}`}> <img  className="card__img" src={image} alt='film'/></Link>
                        {rating && <div className="card__img-box-rating"><img src={Rating} alt='rating'/><p>{rating}</p></div>}
                        {isFavoriteMovie(id) && <div className="card__img-box-heart"><img src={heartRating} alt="heart" /></div>}
                    </div>
                    <div className="card__info">
                        <h2 className={isDarkTheme()?'card__title--dark':'card__title--light'}>{titleFilm}</h2>
                        <p className={isDarkTheme()?'card__year--dark':'card__year--light'}>{yearFilm}</p>
                    </div> 
                </div> 
               
            </div>
        </>
    )
};
