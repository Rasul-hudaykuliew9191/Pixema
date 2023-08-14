import { FC,useState } from 'react';
import { BoardOneFilm } from './BoardOneFilm/BoardOneFilm';
import { ShowMore } from './ShowMore/ShowMore';
import halfround from '../../assets/main/halfround.png'
import './BoardFilms.scss';

interface IBoardFilms {
}

export const BoardFilms: FC<IBoardFilms> = () => {
    const [isOpen,setIsOpen] = useState(false)
    const handleCountShowFilms = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className='board-films'>
                <div className="board-films__header">
                    <BoardOneFilm titleMovie='Interny' from={0} to={1}/>
                    <BoardOneFilm titleMovie='Mortal' from={0} to={1}/>
                    <BoardOneFilm titleMovie='Spartacus' from={0} to={1}/>
                    <BoardOneFilm titleMovie='Survival Island' from={0} to={1}/>
                    <BoardOneFilm titleMovie='Magnificent Century' from={0} to={1}/>
                    <BoardOneFilm titleMovie='Resident Evil' from={0} to={1}/>
                    <BoardOneFilm titleMovie='South Park' from={0} to={1}/>
                    <BoardOneFilm titleMovie='Wrong Turn' from={0} to={1}/>
                    <BoardOneFilm titleMovie='More Ants in the Pants' from={0} to={1}/>
                    <BoardOneFilm titleMovie='Glukhar' from={0} to={1}/>
                    <BoardOneFilm titleMovie='UNDISPUTED' from={0} to={1}/>
                    <BoardOneFilm titleMovie='Saw' from={1} to={2}/>
                </div>
                <div className="board-films__footer">
                    {!isOpen && 
                        <ShowMore content={'show more'} handleClick={handleCountShowFilms}>
                            {<img src={halfround} alt='show more'/>}
                        </ShowMore>
                    }
                    {isOpen && 
                        <div className='board-films'>
                            <div className="board-films__header">
                                <BoardOneFilm titleMovie={`Chip 'n Dale: Rescue Rangers`} from={0} to={1}/>
                                <BoardOneFilm titleMovie={'Ip man 4'} from={0} to={1}/>
                                <BoardOneFilm titleMovie={'Predator'} from={1} to={2}/>
                                <BoardOneFilm titleMovie={'Queen of the Damned'} from={0} to={1}/>
                                <BoardOneFilm titleMovie={'DuckTales'} from={0} to={1}/>
                                <BoardOneFilm titleMovie={'Iron Man'} from={0} to={1}/>
                                <BoardOneFilm titleMovie={'Terminator 2'} from={0} to={1}/>
                                <BoardOneFilm titleMovie={'FunnyMovie'} from={1} to={2}/>
                                <BoardOneFilm titleMovie={'Jurassic World'} from={2} to={3}/>
                                <BoardOneFilm titleMovie={'Batman vs Teenage Mutant Ninja Turtles'} from={0} to={1}/>
                                <BoardOneFilm titleMovie={'Twilight'} from={0} to={1}/>
                                <BoardOneFilm titleMovie={'pie'} from={0} to={1}/>
                            </div>
                            <div className="board-films__footer">
                                <ShowMore content={'show less'} handleClick={handleCountShowFilms}>
                                    {<img className='turn' src={halfround} alt='show less'/>}
                                </ShowMore>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
};
