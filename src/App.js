import React from 'react';
import { connect } from 'react-redux'
import Characters from './components/Characters'
import { fetchCharacters } from './actions/fetchCharacters'

const MARVEL_API_KEY = "ee02c6187f39e0e74f486af6be409b19";
const URL = 'https://gateway.marvel.com:443/v1/public/characters?' + `apikey=${MARVEL_API_KEY}`;

class App extends React.Component {

  componentDidMount() {
    this.props.fetchCharacters({ type: "FETCH_CHARACTERS", payload: { name: 'Thor' } })
  }

  // componentDidMount() {
  //   fetch(URL)
  //     .then(response => response.json())
  //     .then(characterData => console.log(characterData.data.results))
  // }

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/characters', {
  //     method: 'GET'
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }



  render() {
    return (
      <div className="App">
        <Characters />
      </div>
    );

  }

}

// const mapStateToProps = (state) => {
//   return {
//     characters: state.characters
//   }
// }

export default connect(null, { fetchCharacters })(App);
