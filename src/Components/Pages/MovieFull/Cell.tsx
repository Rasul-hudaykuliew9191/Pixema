import { FC } from 'react';
import { useAppContext } from '../../../Context/AppContext';
import './Cell.scss';


interface ICell {
    type:string,
    info:any,
}

export const Cell: FC<ICell> = ({type,info}) => {
    const{isDarkTheme}=useAppContext()
    return (
        <tr>
            <td className={isDarkTheme()?'move-full__list-type--light':'move-full__list-type'}>{type}</td>
            <td className={isDarkTheme()?'move-full__list-info--light':'move-full__list-info'}>{info}</td>
        </tr>
    )
};
