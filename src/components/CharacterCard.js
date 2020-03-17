import React from 'react'

const CharacterCard = ({ character }) => {
    return (
        <div>
            <li key={character.id}>
                <p>{character.name}</p>
                <p>{character.description}</p>
                <img src={`${character.thumbnail.path}.jpg`} alt="thumbnail" width="175" height="175" />
                {character.user_characters && character.user_characters.map(entry =>
                    <div><p> Votes: {entry.votes}</p>
                        <p> Comments: {entry.comments} By:</p>
                    </div>
                )}

            </li>

        </div>
    )

}

export default CharacterCard