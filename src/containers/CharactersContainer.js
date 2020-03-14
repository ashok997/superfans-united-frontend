import React from 'react'
import { connect } from 'react-redux'

import { fetchCharacters } from '../actions/fetchCharacters'
import Characters from '../components/Characters'
import CharacterCard from '../components/CharacterCard'

class CharactersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCharacters()
    }

    render() {

        return (
            <div>
                <CharacterCard />
                <Characters characters={this.props.characters} />
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, { fetchCharacters })(CharactersContainer)