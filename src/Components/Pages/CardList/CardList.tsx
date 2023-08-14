import { FC,useEffect,useState } from 'react';
import { Card } from '../../Card/Card';
import { BASE_URL } from '../../../api/url';
import { BoardFilms } from '../../BoardFilms/BoardFilms';
import './CardList.scss';

interface ICardList {
    titleMovie:string
}

export const CardList: FC<ICardList> = ({titleMovie}) => {
    const[movie,setMovie] = useState([])
   
    useEffect(()=>{
       const fetchMovie = async() =>{
            const URL =  `${BASE_URL}?s=${titleMovie}&apikey=7eb1591a`
            const response = await fetch(URL)
            const Data = await response.json()
            const finalData = Data.Search
            setMovie(finalData)
            console.log(finalData)
    }
    fetchMovie()
    },[titleMovie])
    
    return (
        <div className='card-list'>
             {movie && movie.map((item)=>
                <Card 
                    image={item['Poster']} 
                    titleFilm={item['Title']} 
                    yearFilm={item['Year']}
                    id={item['imdbID']}
                />
            )}
            {!movie && <BoardFilms/>}     
        </div>
    )
};
