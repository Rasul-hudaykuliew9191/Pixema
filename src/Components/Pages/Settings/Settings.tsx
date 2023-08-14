import { FC, useState} from 'react';
import { Options } from './Options/Options';
import { Input } from '../../Form/Input/Input';
import { ToggleTheme } from './ToggleTheme/ToggleTheme';
import { Typography } from '../../Typography/Typography';
import { Button } from '../../Buttons/Button';
import { useAppContext } from '../../../Context/AppContext';
import './Settings.scss';



export const Settings: FC = () => {
    const{isDarkTheme}=useAppContext()
    const [name,setName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [newPassword,setNewPassword] = useState<string>('')
    const [confirmPassword,setConfirmPassword] = useState<string>('')

    const handleName = (newValue:string)=>{
        setName(newValue.trim())
    }
    const handleEmail = (newValue:string)=>{
        setEmail(newValue.trim())
    }
    const handlePassword = (newValue:string)=>{
        setPassword(newValue.trim())
    }
    const handleNewPassword = (newValue:string)=>{
        setNewPassword(newValue.trim())
    }
    const handleConfirmPassword = (newValue:string)=>{
        setConfirmPassword(newValue.trim())
    }

    return (
        <div className='settings'>
            <div className="settings__box">
                <Options title='Profile'>
                    <div className="options__box-left">
                        <Input 
                            title='Name' 
                            placeholder='value'
                            type='text'
                            handleChange={handleName}
                            value={name}
                        />  
                   </div>
                    <div className="options__box-rigth">
                        <Input 
                            title='Email' 
                            placeholder='value' 
                            type='text'
                            handleChange={handleEmail}
                            value={email}
                        />
                    </div>
                </Options>
                <Options title='Password'>
                    <div className="options__box-left">
                        <Input 
                            title='Password' 
                            placeholder='Your password' 
                            type='text'
                            handleChange={handlePassword}
                            value={password}
                        />  
                    </div>
                    <div className="options__box-rigth">
                        <Input 
                            title='New password' 
                            placeholder='New password' 
                            type='text'
                            handleChange={handleNewPassword}
                            value={newPassword}
                        />
                        <Input 
                            title='Confirm password' 
                            placeholder='Confirm password' 
                            type='text'
                            handleChange={handleConfirmPassword}
                            value={confirmPassword}
                        />
                    </div>
                </Options>
                <Options title='Color mode' theme>
                    <div className='theme__content'>
                        <Typography content={isDarkTheme() ?'Light':'Dark'} color={isDarkTheme() ? '#000': '#fff'} type='subline2'/>
                        <Typography content={isDarkTheme() ?'Use light thema':'Use dark thema'} color={isDarkTheme() ?'#000':'#AFB2B6'} type='subline3'/>
                    </div>
                    <ToggleTheme/>
                </Options>
            </div>
            <div className="settings__buttons">
                <div className="settings__buttons-box">
                    <Button type='secondary' content='Cancel'/>
                    <Button type='primary' content='Save'/>
                </div>
            </div>
        </div>
    )
};
