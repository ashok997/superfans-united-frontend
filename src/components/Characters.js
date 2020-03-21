import React from 'react'
import CharacterCard from './CharacterCard'
import CharacterForm from './CharacterForm'
import CharacterSave from './CharacterSave'


const Characters = (props) => {

    debugger;
    const characterCards = props.characters.map((character, index) =>
        <div>
            <CharacterCard character={character} key={index} />
            {character.created_at ?
                (
                    <CharacterForm character={character}
                        upvote={props.upVote}
                        addComment={props.addComment} />
                ) :
                <CharacterSave character={character}
                    saveCharacter={props.saveCharacter} />

            }
        </div>
    )
    return (
        <div>
            {characterCards}
        </div>
    )




}

export default Characters