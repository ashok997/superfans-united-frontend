export function fetchUserCharacters() {

    return fetch('http://localhost:3000/api/v1/users/2')
        .then(response => response.json())
}