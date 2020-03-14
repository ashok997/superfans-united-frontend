import React from 'react'

const Characters = (props) => {

    return (
        <div>
            {props.characters.map(character =>
                <li key={character.id}>
                    <h1>{character.name}</h1>
                    {character.description}
                    <p>{character.thumbnail}</p>
                    <p>{character.image}</p>
                </li>)}
        </div>
    )
}

export default Characters