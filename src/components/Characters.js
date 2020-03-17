import React from 'react'

const Characters = (props) => {

    return (
        <div>
            {props.characters.map(character =>

                <li key={character.id}>
                    <h1>{character.name}</h1>
                    <p>{character.description}</p>
                    <img src={`${character.thumbnail.path}.jpg`} alt="thumbnail" width="175" height="175" />
                    {character.user_characters && character.user_characters.map(entry =>
                        <div><p> Votes: {entry.votes}</p>
                            <p> Comments: {entry.comments} By:</p>
                        </div>
                    )}
                </li>)}
        </div>
    )
}

export default Characters