import React from 'react';

import './styles/Filters.css';
import Search from './Search';
import { FilterByStatus } from './FilterByStatus';
import Wrapper from './Wrapper';

const Filters = () => {
    return(
        <Wrapper>
            <div className="Filters-container">
                <Search />
                <span></span>
                <FilterByStatus />
            </div>
        </Wrapper>
    )
}

export default Filters;