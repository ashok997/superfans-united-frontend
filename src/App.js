import React from 'react';
import CharactersContainer from './containers/CharactersContainer'
import CharactersSearchContainer from './containers/CharactersSearchContainer'
import CharacterCard from './components/CharacterCard'


class App extends React.Component {



  render() {
    return (
      <div className="App">
        <CharactersSearchContainer />
      </div>
    );

  }

}


export default (App);
