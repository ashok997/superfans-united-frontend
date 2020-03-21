import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import CharactersContainer from './containers/CharactersContainer'
import CharactersSearchContainer from './containers/CharactersSearchContainer'
import UserContainer from './components/UserContainer'
import Navbar from './components/Navbar'


class App extends React.Component {



  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/" component={UserContainer} />
        <Route path="/search" component={CharactersSearchContainer} />
        <Route path="/characters" component={CharactersContainer} />
      </Router>
    );

  }

}


export default (App);
