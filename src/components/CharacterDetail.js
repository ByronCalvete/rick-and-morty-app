import React from 'react';

import './styles/CharacterDetail.css';

const CharacterDetail = ({ 
    name,
    status,
    gender,
    origin,
    image,
    species,
    location,
    episode
}) => {
    return (
        <React.Fragment>
            {
                window.scrollTo(0, 0)
            }
            <div className="CharacterDetail-container">
                <img className="CharacterDetail-container-image" src={image} alt={name}/>
                <div>
                    <h2>{name}</h2>
                    <div className="CharacterDetail-container__content">
                        <div>
                            <p><strong>Status:</strong> {status}</p>
                            <p><strong>Gender:</strong> {gender}</p>
                            <p><strong>Origin:</strong> {origin && origin.name}</p>
                        </div>
                        <div>
                            <p><strong>Species:</strong> {species}</p>
                            <p><strong>Location:</strong> {location && location.name}</p>
                            <p><strong>Episodes:</strong> {episode && episode.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CharacterDetail;