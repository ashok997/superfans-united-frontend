import React from 'react'
import { connect } from 'react-redux'
import { addUpVote } from '../actions/addUpVote'
import CharacterCard from './CharacterCard'


class Characters extends React.Component {


    upVote = (character) => {
        let characterData = {
            name: character.name,
            description: character.description,
            thumbnail: character.thumbnail.path + '.jpg',
            image: character.thumbnail.path
        }

        this.props.addUpVote(characterData, { votes: 1 })
    }

    // downVote() {

    // }

    // handleOnSubmit() {

    // }

    // handleOnChange() {

    // }



    render() {

        const characterCards = this.props.characters.map((character, index) =>
            <CharacterCard character={character} upVote={this.upVote} key={index} />
        )
        return (
            <div>
                {characterCards}
            </div>
        )
    }



}

export default connect(null, { addUpVote })(Characters)