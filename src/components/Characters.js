import React from 'react'
import { connect } from 'react-redux'

import CharacterCard from './CharacterCard'


const Characters = (props) => {


    const characterCards = props.characters.map((character, index) =>
        <CharacterCard character={character}
            upVote={props.upVote || null}
            addComment={props.addComment || null}
            key={index} />
    )
    return (
        <div>
            {characterCards}
        </div>
    )




}

export default Characters