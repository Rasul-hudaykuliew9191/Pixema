import { FC } from 'react';
import arrow from '../../assets/header/arrow-bottom.svg';
import { useAppContext } from '../../Context/AppContext';
import { Link } from 'react-router-dom';
import './UserInfo.scss';

interface IUserInfo {
    userName:string;
}

export const UserInfo: FC<IUserInfo> = ({userName}) => {
    const initials = userName.split(' ').map((n)=>n[0]).join('').toUpperCase();
    const{isDarkTheme}=useAppContext();
    const user = `${!isDarkTheme() ? 'user-info__name' : 'user-info__name--light'}`;
    return (
        <Link to={'/form/sign-in'}>
        <div className='user-info'>
            <div className="user-info__box">
                <div className="user-info__initials">{initials}</div>
                <div className={user}>{userName}</div>
            </div>
            <img src={arrow} alt="arrow-bottom" />
        </div>
        </Link>
    )
};
