import { FC,useState } from 'react';
import {Link} from 'react-router-dom';
import { LinkPage } from '../../LinkPage/LinkPage';
import Home from '../../../assets/sideBar/Home.png';
import Triends from '../../../assets/sideBar/Triends.png';
import Favorities from '../../../assets/sideBar/Favorities.png';
import Settings from '../../../assets/sideBar/Settings.png';
import Home2 from '../../../assets/sideBar/Home2.png';
import Triends2 from '../../../assets/sideBar/Triends2.png';
import Favorities2 from '../../../assets/sideBar/Favorities2.png';
import Settings2 from '../../../assets/sideBar/Settings2.png';
import './Nav.scss';



export const Nav: FC = () => {
    const [home,setHome] = useState(false)
    const [triends,setTrends] = useState(false)
    const [favorities,setFavorities] = useState(false)
    const [settings,setSettings] = useState(false)
    
    return (
        <div className='nav'>
            <ul>
                <li>
                    <Link to='/Home'>
                        <LinkPage 
                            image={!home ? Home : Home2} 
                            content='Home' 
                            alt='Home' 
                            changeState={()=>setHome(!home)}
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/Triends'>
                        <LinkPage 
                            image={!triends ? Triends : Triends2} 
                            content='Triends' 
                            alt='Triends' 
                            changeState={()=>setTrends(!triends)}
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/Favorities'>
                        <LinkPage 
                            image={!favorities ? Favorities : Favorities2} 
                            content='Favorities' alt='Favorities' 
                            changeState={()=>setFavorities(!favorities)}
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/Settings'>
                        <LinkPage 
                            image={!settings ? Settings : Settings2} 
                            content='Settings' 
                            alt='Settings' 
                            changeState={()=>setSettings(!settings)}
                        />
                    </Link>
                </li>
            </ul>
        </div>
    )
};
