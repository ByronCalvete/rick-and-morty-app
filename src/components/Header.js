import React from 'react';

import './styles/Header.css';
import Wrapper from './Wrapper';
import Logo from '../images/logo1.png';

const Header = () => {
    const handleClick = () => {

    }

    return (
        <Wrapper>
            <div className="Header-container">
                <figure className="Header-container__image">
                    <img src={Logo} alt="Rick and Morty's Logo"/>
                </figure>
                <div className="Header-container__darkMode">
                    <p onClick={handleClick}>
                        <span className="Header-container__darkMode-moon">
                            <i class="far fa-moon"></i>
                            {/* <i class="fas fa-moon"></i> */}
                        </span>
                        <p>Dark Mode</p>
                    </p>
                </div>
            </div>
        </Wrapper>
    )
}   

export default Header;