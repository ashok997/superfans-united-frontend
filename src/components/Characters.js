import React from 'react'
import { connect } from 'react-redux'
import { addUpVote } from '../actions/addUpVote'
import { addComment } from '../actions/addComment'
import CharacterCard from './CharacterCard'


class Characters extends React.Component {


    upVote = (character) => {
        let characterData = {
            name: character.name,
            description: character.description,
            thumbnail: character.thumbnail.path,
            image: character.thumbnail.path
        }

        this.props.addUpVote(characterData, { votes: 1 })
    }

    // downVote() {

    // }

    addComment = (character, comment) => {

        let thumbnail = character.thumbnail.path || character.thumbnail

        let characterData = {
            name: character.name,
            description: character.description,
            thumbnail: thumbnail,
            image: thumbnail
        }

        debugger;

        this.props.addComment(characterData, { comments: comment.target.comment.value })
    }



    render() {

        const characterCards = this.props.characters.map((character, index) =>
            <CharacterCard character={character}
                upVote={this.upVote}
                addComment={this.addComment}
                key={index} />
        )
        return (
            <div>
                {characterCards}
            </div>
        )
    }



}

export default connect(null, { addUpVote, addComment })(Characters)