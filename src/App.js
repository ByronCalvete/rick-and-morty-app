import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './services/reducer';

import './App.css';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';
import Header from './components/Header';

const initialState = {
    characterList: [],
    characterListByName : [],
    characterFilteredByStatus: [],
    filterByStatus: '',
}

const store = createStore( reducer, initialState )

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <Filters />
            <CharacterList />
        </Provider>
    );
}

export default App;
