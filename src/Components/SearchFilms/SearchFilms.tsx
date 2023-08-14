import { FC } from 'react';
import { useAppContext } from '../../Context/AppContext';
import './SearchFilms.scss';


interface ISearchFilms {
    isDisabled?:boolean;
    titleFilm:any;
    handleFilterMovie:()=>void;
    moveMain:boolean;
}

export const SearchFilms: FC<ISearchFilms> = ({isDisabled=false,titleFilm,handleFilterMovie,moveMain}) => {
    const {isDarkTheme}=useAppContext()
    const inputClass = `search__input-film ${isDisabled && 'serch-film__disabled'} ${isDarkTheme() ? 'search__input-film--light':'search__input-film--dark'}`
    
    return (
        <div className='search'>
            <div className="search__input">
                <input 
                    className={inputClass} 
                    type="text" 
                    placeholder='search' 
                    disabled={moveMain}
                    onChange={(e)=>titleFilm(e.target.value)}
                />
                 <button className='search__filters' onClick={handleFilterMovie} disabled={moveMain}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    )
};
