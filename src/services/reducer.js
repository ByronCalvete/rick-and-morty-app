export default function reducer( state, action ) {
    console.log(action);
    switch(action.type) {
        case 'SET_CHARACTER_LIST': {
            return {
                ...state,
                    characterList: action.payload,
            }
        }
        case 'SET_CHARACTER_BY_NAME': {
            let list;
            if ( state.filterByStatus !== '' ) {
                list = state.characterFilteredByStatus;
            } else {
                list = state.characterList
            }
            const characterListByName = list.filter(character => character.name.toLowerCase().includes(action.payload.toLowerCase()))
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