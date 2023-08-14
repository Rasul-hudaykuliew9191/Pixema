import { FC } from 'react';
import { useAppContext } from '../../../../Context/AppContext';
import './ToggleTheme.scss';



export const ToggleTheme: FC = () => {
    const{toggleTheme,isDarkTheme}=useAppContext()
    const handleToggleTheme =()=> {
        toggleTheme()
        console.log(isDarkTheme())
    }
    const buttonClass = `toggle-theme ${isDarkTheme() && 'active'}`
    return (
        <button className={buttonClass} onClick={handleToggleTheme}>
            <div className='circle'></div>
        </button>
    )
};
