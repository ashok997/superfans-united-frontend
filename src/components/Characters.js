import React from 'react'
import CharacterCard from './CharacterCard'


class Characters extends React.Component {

    render() {

        const characterCards = this.props.characters.map(character =>
            <CharacterCard character={character} />
        )
        return (
            <div>
                {characterCards}
            </div>
        )
    }



}

export default Characters