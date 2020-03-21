import React from 'react'

const CharacterForm = ({ character, upVote, addComment }) => {

    return (
        <div>
            <button
                className="upVote-button"
                onClick={() => upVote(character, "upvote")}>Upvote</button>
            <button
                className="upVote-button"
                onClick={() => upVote(character, "downvote")}>Downvote</button>
            <br />
            <form onSubmit={(comment) => addComment(character, comment)}>
                <input type="text"
                    name='comment'
                    placeholder='comment'
                />
                <button type='submit' value="Submit">Comment</button>
            </form>
        </div>

    )

}

export default CharacterForm
