import React from 'react';
import './styles/InputName.css';

const InputName = ({ ...props }) => {
    return (
        <React.Fragment>
            <label className="InputName-container">
                <i className="fas fa-search"></i>
                <input 
                    type="text" 
                    placeholder="Favorite Character..."
                    { ...props }    
                />
            </label>
        </React.Fragment>
    )
}

export default InputName;