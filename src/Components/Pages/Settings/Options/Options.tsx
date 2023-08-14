import { FC,ReactNode } from 'react';
import { Typography } from '../../../Typography/Typography';
import { useAppContext } from '../../../../Context/AppContext';
import './Options.scss';

interface IOptions {
    title:string;
    children:ReactNode;
    theme?:boolean;
}

export const Options: FC<IOptions> = ({children,title,theme=false}) => {
    const{isDarkTheme}=useAppContext();
    const optionsClass = `options__box ${theme && 'theme'} ${isDarkTheme() ? 'options__box--light':'options__box--dark'}`
    const options = `options`
    return (
        <div className={options}>
            <Typography color={isDarkTheme()?'#000':'#fff'} type='H2' content={title}/>
            <div className={optionsClass}>
                {children} 
            </div>
        </div>
    )
};
