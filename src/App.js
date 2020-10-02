import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharactersContainer from "./containers/CharactersContainer";
import CharactersSearchContainer from "./containers/CharactersSearchContainer";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigationbar />
        <Route exact={true} path="/" component={CharactersContainer} />
        <Route path="/search" component={CharactersSearchContainer} />
        <Route path="/characters" component={CharactersContainer} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <Footer />
      </Router>
    );
  }
}

export default App;
