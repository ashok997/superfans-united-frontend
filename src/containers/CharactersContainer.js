import React from 'react'
import { connect } from 'react-redux'
import { fetchCharacters } from '../actions/fetchCharacters'
import { addComment } from '../actions/addComment'
import { addUpVote } from '../actions/addUpVote'
import Characters from '../components/Characters'

class CharactersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCharacters()
    }

    upVote = (character, type) => {
        const vote = type === "upvote" ? { votes: 1 } : { votes: -1 }
        let characterData = {
            name: character.name,
            description: character.description,
            thumbnail: character.thumbnail.path,
            image: character.thumbnail.path
        }

        this.props.addUpVote(characterData, vote)
    }

    addComment = (character, event) => {

        event.preventDefault()

        let thumbnail = character.thumbnail.path || character.thumbnail

        let characterData = {
            name: character.name,
            description: character.description,
            thumbnail: thumbnail,
            image: thumbnail
        }
        this.props.addComment(characterData, { comments: event.target.comment.value })
    }




    render() {

        return (
            <div>
                <Characters characters={this.props.characters} addUpVote={this.addUpVote} addComment={this.addComment} />
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, { fetchCharacters, addComment, addUpVote })(CharactersContainer)