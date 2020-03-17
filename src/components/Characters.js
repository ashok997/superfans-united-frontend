import React from 'react'
import CharacterCard from './CharacterCard'

const Characters = (props) => {
    const characterCards = props.characters.map(character =>
        <CharacterCard character={character} />)
    return (
        <div>
            {characterCards}
        </div>
    )
}

export default Characters