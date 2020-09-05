export function saveCharacter(character) {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/characters", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ character }),
    })
      .then((respose) => respose.json())
      .then((character) =>
        dispatch({
          type: "SAVE_CHARACTER",
          payload: character,
        })
      );
  };
}
