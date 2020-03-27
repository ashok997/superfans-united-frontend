export default function characterReducer(state = { characters: [] }, action) {
  switch (action.type) {
    case "FETCH_CHARACTERS":
      return { characters: action.payload };
    case "SAVE_CHARACTER":
      return { characters: action.payload };
    case "ADD_COMMENT_OR_VOTE":
      return {
        ...state,
        characters: state.characters.map(character => {
          if (character.id === action.payload.id) {
            return action.payload;
          } else {
            return character;
          }
        })
      };
    default:
      return state;
  }
}
