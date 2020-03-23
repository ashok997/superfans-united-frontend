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
        this.props.addUpVote(character, vote)
    }

    addComment = (character, event) => {
        event.preventDefault()
        this.props.addComment(character, { comments: event.target.comment.value })
    }

    renderCharacters = () => {

    }

    render() {
        let characters = this.props.characters
        return (
            characters &&
            <Characters characters={characters}
                upVote={this.upVote}
                addComment={this.addComment}
            />

        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, { fetchCharacters, addComment, addUpVote })(CharactersContainer)