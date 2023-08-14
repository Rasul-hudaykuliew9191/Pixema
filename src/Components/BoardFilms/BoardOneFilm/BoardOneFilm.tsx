import { FC,useState,useEffect } from 'react';
import { BASE_URL } from '../../../api/url';
import { Card } from '../../Card/Card';
import './BoardOneFilm.scss';

interface IBoardOneFilm {
    titleMovie:string
    from:number
    to:number
    id?:string;
}
interface IFilm {
    Poster:string
    Title:string
    Type:string
    Year:string
    imdbID:string
}
export const BoardOneFilm: FC<IBoardOneFilm> = ({titleMovie,from,to}) => {
    const[movie,setMovie] = useState< IFilm[] | []>([])
   
    useEffect(()=>{
       const fetchMovie = async() =>{
                const URL =  `${BASE_URL}?s=${titleMovie}&apikey=7eb1591a`
                const response = await fetch(URL)
                const Data = await response.json()
                const finalData = Data.Search
                console.log(finalData)
                setMovie(finalData)
        }
        fetchMovie()
    },[titleMovie])
    const oneFilm = movie.slice(from,to)
   
    
    return (
        <div className='board-one-film'>
            {movie && oneFilm.map((item)=>
                <Card 
                    image={item['Poster']} 
                    titleFilm={item['Title']} 
                    yearFilm={item['Year']}
                    id={item['imdbID']}
                />
            )}
        </div>
    )
};
