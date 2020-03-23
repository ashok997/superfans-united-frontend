import React from 'react';
import { connect } from 'react-redux'
import { fetchUserCharacters } from '../actions/fetchUserCharacters'
import { fetchCharacters } from '../actions/fetchCharacters'
import Characters from '../components/Characters'

class UserContainer extends React.Component {

    state = {
        characters: []
    }

    componentDidMount() {
        fetchCharacters()
    }

    filterCharacter = (characters) => {
        const result = characters.filter(character =>
            character.user_characters.filter(entry => entry.user_id === 2))

        return result
    }


    render() {
        return (
            <div>
                <h4> Welcome User!</h4>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         characters: state.characters
//     }
// }

// export default connect(mapStateToProps, { fetchUserCharacters })(UserContainer)

export default UserContainer
