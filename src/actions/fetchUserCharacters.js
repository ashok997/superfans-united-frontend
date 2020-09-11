export function fetchUserCharacters() {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/users/1")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "FETCH_CHARACTERS",
          payload: data.characters,
        })
      );
  };
}
