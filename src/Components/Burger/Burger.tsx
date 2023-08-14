import { FC } from 'react';
import './Burger.scss';

interface IBurger {
    handleMoveMain:()=>void
    isOpen:boolean
    
}

export const Burger: FC<IBurger> = ({handleMoveMain,isOpen}) => {
   
    const burgerClass = `burger ${isOpen && 'active-burger'}`
    return (
        <div className={burgerClass} onClick={handleMoveMain}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};
