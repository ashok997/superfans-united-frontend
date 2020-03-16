export default function characterReducer(state = { characters: [] }, action) {

    switch (action.type) {
        case 'FETCH_CHARACTERS':
            return { characters: action.payload }
        case 'FETCH_CHARACTERS_FROM_API':
            return { characters: action.payload }
        default:
            return state
    }

}