import React from 'react'

const CharacterCard = ({ character }) => {
    return (
        <div >
            <p>{character.name}</p>
            <p>{character.description}</p>
            <p><img src={`${character.thumbnail.path || character.thumbnail}.jpg`} alt="thumbnail" width="175" height="175" /></p>
            <br />
            {character.user_characters && character.user_characters.map(entry =>
                <div>
                    {entry.votes ? <p> Votes: {entry.votes}</p> : <p></p>}
                    {entry.comments ? <p> Comments: {entry.comments} </p> : <p></p>}
                    {entry.user ? <p> By: {entry.user.name} </p> : <p></p>}
                </div>
            )}


        </div>
    )

}

export default CharacterCard

