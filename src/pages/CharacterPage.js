import React from 'react';
import { useSelector } from 'react-redux';

import './styles/CharacterPage.css';
import Wrapper from '../components/Wrapper';
import CharacterDetail from '../components/CharacterDetail';

const CharacterPage = ({ match, history }) => {
    let character = useSelector(state => state.characterList.find(item => item.id === Number(match.params.id)))
    const [ newCharacter, setNewCharacter ] = React.useState(character);

    React.useEffect(() => {
        if ( !newCharacter ) {
            fetch(`https://rickandmortyapi.com/api/character/${Number(match.params.id)}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setNewCharacter(data);
                })
        }
    }, [match.params.id, newCharacter]);

    const handleClick = () => {
        history.goBack();
    }

    return (
        <Wrapper>
            <button className="CharacterPage-button" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i>Back</button>
            <CharacterDetail {...newCharacter} />
        </Wrapper>
    )
}

export default CharacterPage;