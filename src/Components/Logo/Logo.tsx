import { FC } from 'react';
import logo from '../../assets/sideBar/pixema.png'
import logo2 from '../../assets/sideBar/pixema2.png'
import { useAppContext } from '../../Context/AppContext';
import './Logo.scss';

interface ILogo {
}

export const Logo: FC<ILogo> = () => {
    const{isDarkTheme}=useAppContext()
    return (
        <>
            <img src={isDarkTheme() ? logo2 : logo} alt="" />
        </>
    )
};
