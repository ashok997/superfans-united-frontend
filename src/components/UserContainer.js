import React from 'react';
import { fetchUserCharacters } from '../actions/fetchUserCharacters'

class UserContainer extends React.Component {

    componentDidMount() {
        let CharacterId = 1;
        fetchUserCharacters(CharacterId)
    }

    render() {
        return (
            <div>
                <h4> Welcome User!</h4>
            </div>
        )
    }
}

export default UserContainer