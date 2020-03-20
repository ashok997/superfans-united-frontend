import React from 'react'

const CharacterCard = ({ character, upVote, addComment }) => {



    return (


        <div >
            <li>
                <p>{character.name}</p>
                <p>{character.description}</p>
                <img src={`${character.thumbnail.path || character.thumbnail}.jpg`} alt="thumbnail" width="175" height="175" />
                <br />
                {character.user_characters && character.user_characters.map(entry =>
                    <div>
                        <p> Votes: {entry.votes}</p>
                        <p> Comments: {entry.comments} By: {entry.user.name}</p>
                    </div>
                )}
                <button
                    className="upVote-button"
                    onClick={() => upVote(character)}>Upvote</button>
                {/* <button onClick={() => DownVote(character.id)}>Downvote</button> */}
                <br />
                <form onSubmit={(comment) => addComment(character, comment)}>
                    <input type="text"
                        name='comment'
                        placeholder='comment'
                    />
                    <button type='submit' value="Submit">Comment</button>
                </form>
            </li>

        </div>
    )

}

export default CharacterCard

