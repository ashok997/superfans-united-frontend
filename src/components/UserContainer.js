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
        fetchUserCharacters()
            .then(data => this.setState({
                characters: data.characters
            }))
    }





    render() {
        return (
            <div>
                <h4> Welcome User!</h4>
                <Characters characters={this.state.characters} />
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
