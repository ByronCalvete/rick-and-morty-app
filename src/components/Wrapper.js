import React from 'react';

import './styles/Wrapper.css';

const Wrapper = ({ children }) => {
    return (
        <div className="Wrapper-container">
            { children }
        </div>
    )
}

export default Wrapper;