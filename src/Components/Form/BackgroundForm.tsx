import { FC } from 'react';
import { Logo } from '../Logo/Logo';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';
import { NewPassword } from './NewPassword/NewPassword';
import { ResetPassword } from './ResetPassword/ResetPassword';
import { Link, Route, Routes } from 'react-router-dom';
import './BackgroundForm.scss';

interface IBackgroundForm {

}

export const Form: FC<IBackgroundForm> = () => {
    
    return (
        <div className='form-background'  >
            <Link to={'/Home'}><div className="form-background__logo"><Logo/></div></Link>
            <Routes>
                <Route path='sign-in' element={<SignIn/>}/>
                <Route path='sign-up' element={<SignUp/>}/>
                <Route path='new-password' element={<NewPassword/>}/>
                <Route path='reset-password' element={<ResetPassword/>} />
            </Routes>
        <footer className='form-background__footer'>© All Rights Reserved</footer>
        </div>
    )
};
