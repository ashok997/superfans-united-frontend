import React from 'react'
import { connect } from 'react-redux'

import { fetchCharactersFromApi } from '../actions/fetchCharactersFromApi'
import Characters from '../components/Characters'

class CharactersSearchContainer extends React.Component {

    state = {
        key: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchCharactersFromApi(this.state.key);
    }

    handleChange = (event) => {
        this.setState({
            key: event.target.value
        })
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Search Characters :</p>
                    <label>Names Starting with: </label>
                    <input type="text" name="nameStartingWith" value={this.state.key} onChange={this.handleChange} />
                    <input type='submit'></input>
                </form>
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

export default connect(mapStateToProps, { fetchCharactersFromApi })(CharactersSearchContainer)