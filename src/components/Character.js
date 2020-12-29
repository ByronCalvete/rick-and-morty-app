import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles/Character.css';

const Character = ({ 
    id,
    name, 
    status, 
    gender, 
    origin, 
    image 
}) => {

    const history = useHistory();
    const handleClick = () => {
        history.push(`/character/${id}`);
    }

    return (
        <div onClick={handleClick} className="Character-container">
            <img loading="lazy" className="Character-container__image" src={image} alt={name} />
            <h2 className="Character-container__name">{name}</h2>
            <div className="Character-container__info">
                <p><strong>Status:</strong> {status}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Origin:</strong> {origin}</p>
            </div>
        </div>
    );
}

export default Character;