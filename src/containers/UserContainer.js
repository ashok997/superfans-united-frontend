// import React from 'react';

// import { fetchUserCharacters } from '../actions/fetchUserCharacters'

// import Characters from '../components/Characters'

// class UserContainer extends React.Component {

//     state = {
//         characters: [],
//         user: { name: 'Tony', email: "tony@starkindustries" }
//         //mocking the fetched user
//     }

//     componentDidMount() {
//         fetchUserCharacters()
//             .then(data => this.setState({
//                 characters: data.characters
//             }))
//     }

//     render() {
//         return (

//             <div class='container'>
//                 <h4> Welcome {this.state.user.name}!</h4>
//                 <Characters characters={this.state.characters} />
//             </div >
//         )
//     }
// }


// export default UserContainer
