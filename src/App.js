import React from 'react';
import './App.css';
import CharacterList from './componets/CharacterList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    characterList: [],
}

function reducer( state, action ) {
    switch(action.type) {
        case 'SET_CHARACTER_LIST': {
            return {
                ...state,
                    characterList: action.payload,
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
            <React.Fragment>
                <CharacterList />
            </React.Fragment>
        </Provider>
    );
}

export default App;
