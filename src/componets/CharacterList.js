import React from 'react';
import { getItems } from '../services/api';
import './styles/CharacterList.css';
import Character from './Character';
import { useSelector, useDispatch } from 'react-redux';

const CharacterList = () => {
    const dispatch = useDispatch();
    const characterList = useSelector((state) => state.characterList );
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
        <div className="CharacterList-container">
            {
                characterList.map( character => {
                    return (
                        <Character 
                            key={character.id}
                            name={character.name} 
                            status={character.status} 
                            gender={character.gender}
                            origin={character.origin.name}
                            image={character.image}
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
    );
}

export default CharacterList;