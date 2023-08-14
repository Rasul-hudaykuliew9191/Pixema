import { FC,RefObject,useEffect,useRef,KeyboardEvent } from 'react';
import { Typography } from '../../Typography/Typography';
import { useAppContext } from '../../../Context/AppContext';
import './Input.scss';

interface IInput {
    title:string;
    placeholder:string;
    handleChange: (newValue: string) => void;
    value?:string;
    isDisabled?:boolean;
    inputRef?: RefObject<HTMLInputElement>;
    isError?:string | string[];
    isFocus?:boolean;
    type?: 'text' | 'password';
    handleKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInput> = ({
    title,
    placeholder,
    isDisabled=false,
    isError,
    isFocus=false,
    handleChange,
    handleKeyUp,
    type = 'text',
    value,
    
}) => {
    const{isDarkTheme}=useAppContext()
    const inputClass = `box-input__input 
                        ${isDisabled && 'disabled'} 
                        ${isError && 'error'} 
                        ${isDarkTheme() ? 'box-input__input--light':'box-input__input--dark'}`;
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        if(inputRef.current && isFocus){
            inputRef.current.focus()
        }
    },[isFocus])
    
    return (
       <div className='box-input'>
            <Typography 
                content={title} 
                type='subline3' 
                color={isDarkTheme()?'#000':'#fff'}
            />
            <input 
                ref={inputRef}
                type={type} 
                className = {inputClass}
                placeholder={placeholder}
                disabled = {isDisabled}
                onChange={(e) => handleChange(e.target.value)}
                value={value}
                onKeyUp={handleKeyUp}
            />
            {isError}
       </div>
    )
};
