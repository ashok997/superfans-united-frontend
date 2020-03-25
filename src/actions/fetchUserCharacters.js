export function fetchUserCharacters() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users/2')
            .then(response => response.json())
            .then(data => dispatch({
                type: "FETCH_CHARACTERS",
                payload: data.characters
            }))
    }

}


