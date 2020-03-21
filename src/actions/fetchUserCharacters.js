export function fetchUserCharacters(UserId) {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/characters')
            .then(response => response.json())
            .then(data => dispatch({
                type: "FETCH_CHARACTERS",
                payload: data
            }))
    }
}