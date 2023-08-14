import { FC } from 'react';
import './Typography.scss';

interface ITypography {
    content:string,
    type:'H1'|'H2'|'H3'|'subline1'|'subline2'|'subline3'|'textPrimary',
    color?:string
}

export const Typography: FC<ITypography> = ({content,type,color}) => {
    
    const colorTypography = {color:color}
    const Typography = {
        H1:<h1 className={type} style={colorTypography}>{content}</h1>,
        H2:<h2 className={type} style={colorTypography}>{content}</h2>,
        H3:<h3 className={type} style={colorTypography}>{content}</h3>,
        subline1:<h4 className={type} style={colorTypography}>{content}</h4>,
        subline2:<h5 className={type} style={colorTypography}>{content}</h5>,
        subline3:<h6 className={type} style={colorTypography}>{content}</h6>,
        textPrimary:<p className={type} style={colorTypography}>{content}</p>,
    }
    return (
        <>{Typography[type]}</>
    )
};
