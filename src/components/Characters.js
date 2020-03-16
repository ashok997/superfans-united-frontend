import React from 'react'

const Characters = (props) => {

    return (
        <div>
            {props.characters.map(character =>
                <li key={character.id}>
                    <h1>{character.name}</h1>
                    <p>{character.description}</p>
                    <img src={character.thumbnail} alt="thumbnail" width="100" height="150" />
                    {character.user_characters.map(entry =>
                        <div><p> Votes: {entry.votes}</p>
                            <p> Comments: {entry.comments} By: {entry.user_id}</p>
                        </div>
                    )}
                </li>)}
        </div>
    )
}

export default Characters