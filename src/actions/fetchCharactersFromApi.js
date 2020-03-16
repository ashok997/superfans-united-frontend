export function fetchCharactersFromApi() {
    let nameStartsWith = 'iron'
    const MARVEL_API_KEY = "ee02c6187f39e0e74f486af6be409b19";
    const URL = 'https://gateway.marvel.com:443/v1/public/characters?' + `nameStartsWith=${nameStartsWith}` + `&apikey=${MARVEL_API_KEY}`;

    return (dispatch) => {
        fetch(URL)
            .then(response => response.json())
            .then(rawdata => dispatch({
                type: "FETCH_CHARACTERS_FROM_API",
                payload: rawdata.data.results
            }))
    }
}
