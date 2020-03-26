export function addComment(character, details) {

    return (dispatch) => {

        fetch('http://localhost:3000/api/v1/user_characters', {
            headers: {
                'Content-Type': "application/json"
            },
            method: 'POST',
            body: JSON.stringify({ character, details })
        })
            .then(respose => respose.json())
            .then(character => dispatch({
                type: "ADD_COMMENT_OR_VOTE",
                payload: character
            }))
    }

}