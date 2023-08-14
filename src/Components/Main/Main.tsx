import { FC, useState } from 'react';
import { Header } from '../Header/Header';
import { CardList } from '../Pages/CardList/CardList';
import { Settings } from '../Pages/Settings/Settings';
import { Route, Routes,Navigate } from 'react-router-dom';
import { Triends } from '../Pages/Triends/Triends';
import { Favorities } from '../Pages/Favorities/Favorities';
import { MovieFull } from '../Pages/MovieFull/MovieFull';



interface IMain {
    handleMoveMain: () => void
    handleFilterMovie: () => void
    isOpen: boolean;
    moveMain: boolean;
}

export const Main: FC<IMain> = ({ handleMoveMain, handleFilterMovie, isOpen, moveMain }) => {
    const [titleMovie, setTitleMovie] = useState('')
    const handleTitleFilm = (newValue: string) => {
        setTitleMovie(newValue)
    }
    return (
        <main className='main'>
            <Header
                titleFilm={handleTitleFilm}
                handleMoveMain={handleMoveMain}
                isOpen={isOpen}
                handleFilterMovie={handleFilterMovie}
                moveMain={moveMain}
            />
            <Routes>
                <Route path='/' element={<Navigate to={'/Home'}/>}/>
                <Route path='/Triends' element={<Triends/>}/>
                <Route path='/Favorities' element={<Favorities/>}/>
                <Route path='/Home' element={<CardList titleMovie={titleMovie} />} />
                <Route path='/Settings' element={<Settings />}/>
                <Route path='/movies/:id' element={<MovieFull />} />
            </Routes>
        </main>
    )
};
