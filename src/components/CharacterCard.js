import React from 'react'

const CharacterCard = ({ character }) => {
    return (
        <div >
            <p>{character.name}</p>
            <p>{character.description}</p>
            <p><img src={`${character.thumbnail.path || character.thumbnail}.jpg`} alt="thumbnail" width="175" height="175" /></p>
            Comments:
            {
                character.user_characters && character.user_characters.map(entry =>
                    <div>
                        {entry.comments ? <>{entry.comments}</> : <></>}
                        {entry.user && entry.comments ? <> By: {entry.user.name}</> : <></>}
                        {/* this is done to avoid duplicates rendering of user name */}
                    </div>
                )
            }
            Votes:
            {
                character.user_characters && character.user_characters.map(entry =>
                    <div>
                        {entry.votes ? <> {entry.votes} </> : <></>}
                        {entry.user && entry.votes ? <> By: {entry.user.name} </> : <></>}
                    </div>
                )
            }

        </div >
    )

}

export default CharacterCard

