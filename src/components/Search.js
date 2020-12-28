import React from 'react';
import { useDispatch } from 'react-redux';

import './styles/Search.css';
import InputName from './InputName';

const Search = () => {
    const [ inputValue, setInputValue ] = React.useState('');
    const dispatch = useDispatch();


    const filterByName = ( e ) => {
        setInputValue(e.target.value);
        dispatch({
            type: 'SET_CHARACTER_BY_NAME',
            payload: e.target.value,
        })
    }

    const clearInput = () => {
        dispatch({
            type: 'SET_CHARACTER_BY_NAME',
            payload: '',
        })
        setInputValue('');
    }

    return (
        <div className="Search-container">
            {
                inputValue && <i class="fas fa-times Search-container__close" onClick={clearInput}></i>
            }
            <InputName value={inputValue} onChange={filterByName} />
        </div>
    )
}

export default Search;