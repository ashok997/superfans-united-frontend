import React from 'react';
import { connect } from 'react-redux'
import { fetchUserCharacters } from '../actions/fetchUserCharacters'
import { fetchCharacters } from '../actions/fetchCharacters'
import Characters from '../components/Characters'

class UserContainer extends React.Component {

    state = {
        characters: [],
        user: { name: 'Tony', email: "tony@starkindustries" }
    }

    componentDidMount() {
        fetchUserCharacters()
            .then(data => this.setState({
                characters: data.characters
            }))
    }

    render() {
        return (

            <div class='container'>
                <h4> Welcome {this.state.user.name}!</h4>
                <Characters characters={this.state.characters} />
            </div >
        )
    }
}


export default UserContainer
