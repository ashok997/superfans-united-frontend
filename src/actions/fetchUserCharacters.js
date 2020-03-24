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

// export function fetchCharactersFromApi(nameStartsWith) {
//     const MARVEL_API_KEY = "ee02c6187f39e0e74f486af6be409b19";
//     const URL = 'https://gateway.marvel.com:443/v1/public/characters?' + `nameStartsWith=${nameStartsWith}` + `&apikey=${MARVEL_API_KEY}`;

//     return fetch(URL)
//         .then(response => response.json())

// }
