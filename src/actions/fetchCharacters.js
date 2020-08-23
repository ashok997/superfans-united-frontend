export function fetchCharacters() {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/characters')
            .then(response => response.json())
            .then(data => dispatch({
                type: "FETCH_CHARACTERS",
                payload: data
            }))
    }
}
