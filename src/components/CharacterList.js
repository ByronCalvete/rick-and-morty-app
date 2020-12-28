import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getItems } from '../services/api';
import './styles/CharacterList.css';

import Character from './Character';

const CharacterList = () => {
    const dispatch = useDispatch();

    const characterListByName = useSelector((state) => state.characterListByName)

    const characterList = useSelector((state) => {
        if ( '' !== state.filterByStatus && characterListByName.length === 0 ) {
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

    return (
        <React.Fragment>
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