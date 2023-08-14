import { FC,useState,useEffect } from 'react';
import { BASE_URL } from '../../../api/url';
import { Card } from '../../Card/Card';
import './TriendMovie.scss';

interface ITriendMovie {
    id:string
}

export const TriendMovie: FC<ITriendMovie> = ({id}) => {
    const[image,setImage]=useState('')
    const[title,setTitle]=useState('')
    const[year,setYear]=useState('')
    const[rating,setRating]=useState('')
    const[idFilm,setIdFilm]=useState('')
    useEffect(()=>{
        const fetchTrendFilm = async()=>{
            const URL = `${BASE_URL}?i=${id}&apikey=7eb1591a`
            const response = await fetch(URL)
            const Data = await response.json()
            setImage(Data['Poster'])
            setTitle(Data['Title'])
            setYear(Data['Year'])
            setRating(Data['imdbRating'])
            setIdFilm(Data['imdbID'])
        }
        fetchTrendFilm()
    },[id])
    
    return (
        <div className='triend-movie'>
            <Card 
                image={image} 
                titleFilm={title} 
                yearFilm={year}
                rating={rating}
                id={idFilm}
            />
        </div>
    )
};
