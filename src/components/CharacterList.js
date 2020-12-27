import React from 'react';
import { getItems } from '../services/api';
import './styles/CharacterList.css';
import Character from './Character';
import { useSelector, useDispatch } from 'react-redux';

const CharacterList = () => {
    const [ inputValue, setInputValue ] = React.useState('');
    const dispatch = useDispatch();

    const characterListByName = useSelector((state) => state.characterListByName)

    const characterList = useSelector((state) => {
        if ( '' !== state.filterByStatus ) {
            return state.characterFilteredByStatus;
        }

        if ( characterListByName.length > 0 ) {
            return characterListByName;
        }

        return state.characterList;
    } );
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        getItems(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then((list) => {
                dispatch({
                    type: 'SET_CHARACTER_LIST',
                    payload: list,
                })
                window.scrollTo(0, 0);
            })
            .catch(() => {
                console.log('Hubo un error')
            })
    }, [page, dispatch])

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
        <React.Fragment>
            <input type="text" value={inputValue} onChange={filterByName}/>
            {
                inputValue && <button onClick={clearInput}>X</button>
            }
            {
                characterListByName.length === 0 && inputValue && <p><strong>{inputValue}</strong>Not found in characters</p>
            }   
            <div className="CharacterList-container">
                {
                    characterList.map( ({ id, name, status, gender, origin, image }) => {
                        return (
                            <Character 
                                key={id}
                                name={name} 
                                status={status} 
                                gender={gender}
                                origin={origin.name}
                                image={image}
                            />
                        )
                    })
                }
                <button className="CharacterList-container__button" onClick={() => {
                    setPage(page + 1);
                    return getItems(`https://rickandmortyapi.com/api/character/?page=${page}`); 
                }}>
                    Load more...
                </button>
            </div>
        </React.Fragment>
    );
}

export default CharacterList;