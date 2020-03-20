import React from 'react'
import { fetchCharactersFromApi } from '../actions/fetchCharactersFromApi'
import Characters from '../components/Characters'


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

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Search Characters :</p>
                    <label>Names Starting with: </label>
                    <input type="text" name="nameStartingWith" value={this.state.searchKey} onChange={this.handleChange} />
                    <input type='submit'></input>
                </form>
                <Characters characters={this.state.results} />

            </div>

        )
    }
}


export default CharactersSearchContainer