import React from 'react'
import { connect } from 'react-redux'

import { fetchCharactersFromApi } from '../actions/fetchCharactersFromApi'
import CharactersSearch from '../components/CharactersSeacrh'

class CharactersSearchContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCharactersFromApi()
    }

    render() {

        return (
            <div>
                <CharactersSearch characters={this.props.characters} />
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, { fetchCharactersFromApi })(CharactersSearchContainer)