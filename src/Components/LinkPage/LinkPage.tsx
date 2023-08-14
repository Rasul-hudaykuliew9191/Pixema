import { FC } from 'react';
import './LinkPage.scss';

interface ILinkPage {
    content:string;
    image:string;
    alt:string;
    changeState:()=>void;
}

export const LinkPage: FC<ILinkPage> = ({
    content,
    image,
    alt,
    changeState,
  
}) => {
   
    return (
        <li 
            className='link-page' 
            onMouseEnter={changeState}
            onMouseLeave={changeState}
        >
            <img src={image} alt={alt}/>
            {content}
        </li>
    )
};
