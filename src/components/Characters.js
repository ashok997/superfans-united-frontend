import React, { Component } from 'react'
import characters from '../cards-data.js'

class Characters extends Component {

    constructor() {
        super()
        this.state = {
            characters: []
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         characters: characters.data.results
    //     })
    // }
    render() {
        //console.log(characters)
        // const characterCards = this.state.map(character => <CharacterCard />)
        return (
            <div>
                Character
            </div>
        )
    }
}

export default Characters