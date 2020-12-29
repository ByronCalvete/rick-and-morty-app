import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Header.css';
import Wrapper from './Wrapper';
import Logo from '../images/logo1.png';

const Header = () => {
    return (
        <Wrapper>
            <div className="Header-container">
                <Link to="/">
                    <figure className="Header-container__image">
                        <img src={Logo} alt="Rick and Morty's Logo"/>
                    </figure>
                </Link>
            </div>
        </Wrapper>
    )
}   

export default Header;