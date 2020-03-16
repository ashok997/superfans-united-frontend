import React, { Component } from 'react'

class CharactersSearch extends Component {

    state = {
        nameStartingWith: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {


    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <p>Search Characters :</p>
                <label>Names Starting with: </label>
                <input type="text" placeholder="nameStartingWith" value={this.state.name} name="nameStartingWith" onChange={this.handleChange} />
                <input type='submit'></input>
            </form>
        )
    }
}

export default CharactersSearch