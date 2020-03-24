import React from 'react'
import { fetchCharactersFromApi } from '../actions/fetchCharactersFromApi'
import { connect } from 'react-redux'
import Characters from '../components/Characters'
import { saveCharacter } from '../actions/saveCharacter'


class CharactersSearchContainer extends React.Component {

    state = {
        results: [],
        searchKey: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetchCharactersFromApi(this.state.searchKey)
            .then(rawData => this.setState({
                results: rawData.data.results
            }))
    }

    handleChange = (event) => {
        this.setState({
            searchKey: event.target.value
        })
    }

    saveCharacter = (character) => {
        let thumbnail = character.thumbnail.path
        let characterData = {
            name: character.name,
            description: character.description,
            thumbnail: thumbnail,
            image: thumbnail
        }

        this.props.saveCharacter(characterData)
        this.props.history.push("/characters")
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        name="nameStartingWith"
                        class="form-control"
                        placeholder="Names Startin With"
                        value={this.state.searchKey}
                        onChange={this.handleChange} />
                    <input type='submit'></input>
                </form>
                <Characters characters={this.state.results}
                    saveCharacter={this.saveCharacter} />

            </div>

        )
    }
}


export default connect(null, { saveCharacter })(CharactersSearchContainer)