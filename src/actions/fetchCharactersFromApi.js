export function fetchCharactersFromApi(nameStartsWith) {
  const REACT_APP_MARVEL_API_KEY = process.env.REACT_APP_MARVEL_API_KEY;
  const URL =
    "https://gateway.marvel.com:443/v1/public/characters?" +
    `nameStartsWith=${nameStartsWith}` +
    `&apikey=${REACT_APP_MARVEL_API_KEY}`;

  return fetch(URL).then((response) => response.json());
}
