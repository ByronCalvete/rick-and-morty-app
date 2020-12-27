import React from 'react';
import './styles/Character.css';

const Character = ({ 
    name, 
    status, 
    gender, 
    origin, 
    image 
}) => {
    return (
        <div className="Character-container">
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