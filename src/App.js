import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import reducer from './services/reducer';

import './App.css';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';
import Header from './components/Header';
import CharacterPage from './pages/CharacterPage';

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
            <Router>
                <Header />
                <Switch>    
                    <Route path="/character/:id" component={CharacterPage} />
                    <Route path="/">
                        <Filters />
                        <CharacterList />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
