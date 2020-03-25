import React from 'react'

const CharacterCard = ({ character }) => {
    return (
        <div >
            <center><h3>{character.name}</h3></center>
            <p>{character.description}</p>
            <p><img src={`${character.thumbnail.path || character.thumbnail}.jpg`} alt="thumbnail" width="250" height="250" /></p>
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
            <br></br>
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

