import React from 'react'
import CharacterCard from './CharacterCard'
import CharacterForm from './CharacterForm'
import CharacterSave from './CharacterSave'


const Characters = (props) => {

    const characterCards = props.characters.length && props.characters.map((character, index) =>

        <div class='container'>

            <CharacterCard character={character} key={index} />
            {character.created_at ?
                (
                    <CharacterForm character={character}
                        upVote={props.upVote}
                        addComment={props.addComment} />
                )
                :
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