import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { FilterStatus } from './components/FilterStatus';

const initialState = {
    characterList: [],
    characterListByName : [],
    characterFilteredByStatus: [],
    filterByStatus: '',
}

function reducer( state, action ) {
    console.log(action);
    switch(action.type) {
        case 'SET_CHARACTER_LIST': {
            return {
                ...state,
                    characterList: action.payload,
            }
        }
        case 'SET_CHARACTER_BY_NAME': {
            const characterListByName = (state.characterList || []).filter(character => character.name.toLowerCase().includes(action.payload.toLowerCase()))
            return {
                ...state,
                    characterListByName,
            }
        }
        case 'FILTER_BY_STATUS': {
            const { statusSelected } = action.payload;
            if ( '' === statusSelected ) {
                return {
                    ...state,
                        characterFilteredByStatus: [],
                        filterByStatus: '',
                }
            }
            const characterFilteredByStatus = state.characterList.filter(character => character.status === statusSelected);

            return {
                ...state,
                    characterFilteredByStatus,
                    filterByStatus: statusSelected,
            }
        }

        default: {
            return state;
        }
    }
}

const store = createStore( reducer, initialState )

const App = () => {
    return (
        <Provider store={store}>
            <FilterStatus />
            <CharacterList />
        </Provider>
    );
}

export default App;
