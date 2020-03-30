export function fetchCharactersFromApi(nameStartsWith) {
  const MARVEL_API_KEY = "ee02c6187f39e0e74f486af6be409b19";
  const URL =
    "https://gateway.marvel.com:443/v1/public/characters?" +
    `nameStartsWith=${nameStartsWith}` +
    `&apikey=${MARVEL_API_KEY}`;

  return fetch(URL).then(response => response.json());
}
