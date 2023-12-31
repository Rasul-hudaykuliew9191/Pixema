import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Typography } from '../../../Components/Typography/Typography';
import { Input } from '../../../Components/Form/Input/Input';
import { Button } from '../../../Components/Buttons/Button';
import { postNewUser } from '../../../api/postNewUser';
import './SignUp.scss';

interface IError {
    username: string | string[];
    email: string | string[];
    password: string | string[];
    confirmPassword: string | string[];
}

export const SignUp: FC = () => {
    const navigate = useNavigate();

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassowrd] = useState('');

    const [errors, setErrors] = useState<IError>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChangeName = (newValue: string) => {
        setUserName(newValue);
    }

    const handleChangeEmail = (newValue: string) => {
        setEmail(newValue);
    }

    const handleChangePassword = (newValue: string) => {
        setPassword(newValue);
    }

    const handleChangeConfirmPassword = (newValue: string) => {
        setConfirmPassowrd(newValue);
    }

    const validateForm = () => {
        const newErrors: IError = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        if (!username) {
            newErrors.username = 'Name is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Confirm password is required';
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            newErrors.password = 'Passwords do not match';
        }

        let isValid = Object.values(newErrors).every(error => error === '');
        if (isValid) {
            return true;
        } else {
            setErrors(newErrors);
            return false;
        }
    }

    const handleSubmit = () => {
        if (validateForm()) {
            postNewUser({ username, email, password }).then(() => {
                navigate('/');
            }).catch((error) => setErrors(prev => ({ ...prev, ...error.response.data })));
        }
    }

    return (
        <div className='sign-up'>
            <form className='sign-up__form'>
                <Typography content='Sign Up' type='H1' />
                <Input
                    title='Name'
                    placeholder='Your name'
                    value={username}
                    handleChange={handleChangeName}
                    isError={errors.username}
                />
                <Input
                    title='Email'
                    placeholder='Your email'
                    value={email}
                    handleChange={handleChangeEmail}
                    isError={errors.email}
                />
                <Input
                    title='Password'
                    placeholder='Your password'
                    value={password}
                    handleChange={handleChangePassword}
                    isError={errors.password}
                    type='password'
                />
                <Input
                    title='Confirm password'
                    placeholder='Confirm password'
                    value={confirmPassword}
                    handleChange={handleChangeConfirmPassword}
                    isError={errors.confirmPassword}
                    type='password'
                />
                <Button content='Sign Up' onClick={handleSubmit} type='primary' />
                <p className='sign-up__form-description'>
                    Already have an account? {' '}
                    <Link to='/form/sign-in' className='sign-up__form-link'>
                        Sign In
                    </Link>
                </p>
            </form>
        </div>
    )
};
