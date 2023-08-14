import { FC,useState } from 'react';
import { SideBar } from '../../SideBar/SideBar';
import { Main } from '../../Main/Main';
import { Nav } from '../../SideBar/Nav/Nav';
import { Filter } from '../../Filter/Filter';
import './PageTemplate.scss';

interface IPageTemplate {
}

export const PageTemplate: FC<IPageTemplate> = () => {
    const [moveMain,setMoveMain] = useState(false)
    const[filterMovie,setFilterMovie] = useState(false)
    const handleMoveMain = () => {
        setMoveMain(!moveMain)
    }
    const handleFilterMovie = () => {
        setFilterMovie(!filterMovie)
    }
    
    return (
        <div className={`page-template ${moveMain && 'page-template--move'}`}>
            <div className="container">
                <div className="page-template__body">
                    <div className="page-template__sidebar">
                        <SideBar/>
                    </div>
                    <div className="page-template__main">
                        <Main 
                            handleMoveMain = {handleMoveMain} 
                            isOpen={moveMain}
                            handleFilterMovie={handleFilterMovie}
                            moveMain={moveMain}
                        />
                    </div>
                </div>
            </div>
            <div className='page-template__nav'><Nav/></div>
            <Filter handleFilterMovie={handleFilterMovie} isOpen={filterMovie} moveMain={moveMain}/>
        </div>
    )
};
