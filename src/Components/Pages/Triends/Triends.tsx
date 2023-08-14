import { FC } from 'react';
import { TriendMovie } from './TriendMovie';
import './Triends.scss';


interface ITriends {
}

export const Triends: FC<ITriends> = () => {
    return (
        <div className='triends'>
            <TriendMovie id={'tt0295375'}/>
            <TriendMovie id={'tt5433140'}/>
            <TriendMovie id={'tt1156466'}/>
            <TriendMovie id={'tt4701182'}/>
            <TriendMovie id={'tt6139732'}/>
            <TriendMovie id={'tt8041270'}/>
            <TriendMovie id={'tt6673612'}/>
            <TriendMovie id={'tt4154796'}/>
            <TriendMovie id={'tt6718170'}/>
            <TriendMovie id={'tt9362722'}/>
        </div>
    )
};

