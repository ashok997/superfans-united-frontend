export default function characterReducer(state = { characters: [] }, action) {
    switch (action.type) {
        case 'FETCH_CHARACTERS':
            return { characters: action.payload }
        case 'SAVE_CHARACTER':
            return { characters: action.payload }
        case 'ADD_COMMENT':
            return {
                ...state, characters: state.characters.map(character => {
                    if (character.id === action.payload.id) {
                        return action.payload
                    } else {
                        return character
                    }
                })
            }
        default:
            return state
    }

    // ADD_COMMENT
    // api will return updated character object w/ comments
    // copy gobal state -> const characters = [...state.characters]
    // find the character that was updated -> updatedChar = characters.find(char => char.id == action.character.id)
    // updateChar.comments = action.character.comments
    //return {characters}

}