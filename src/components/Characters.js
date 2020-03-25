import React from 'react'
import CharacterCard from './CharacterCard'
import CharacterForm from './CharacterForm'
import CharacterSave from './CharacterSave'


const Characters = (props) => {
    const characterCards = props.characters.length && props.characters.map((character) =>
        <div class="col-6 col-sm-4" >
            <CharacterCard character={character} key={character.id} />
            {character.created_at ?
                (
                    <CharacterForm character={character}
                        upVote={props.upVote}
                        addComment={props.addComment}
                        key={character.id + "-form"} />
                )
                :
                <CharacterSave character={character}
                    saveCharacter={props.saveCharacter}
                    key={character.id + "-save"} />

            }
        </div>



    )

    return (
        <div class="row">
            {characterCards}
        </div>
    )




}

export default Characters