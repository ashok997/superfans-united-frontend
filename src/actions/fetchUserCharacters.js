export function fetchUserCharacters() {

    return (dispatch) => fetch('http://localhost:3000/api/v1/characters')
        .then(response => response.json())
        .then(data => dispatch({
            type: "FETCH_USER_CHARACTERS",
            payload: data
        }))
}