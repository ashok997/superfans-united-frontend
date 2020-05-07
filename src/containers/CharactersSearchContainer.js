import React from "react";
import { fetchCharactersFromApi } from "../actions/fetchCharactersFromApi";
import { connect } from "react-redux";
import Characters from "../components/Characters";
import { saveCharacter } from "../actions/saveCharacter";
import Form from "react-bootstrap/Form";
import NoResult from "../components/NoResult";

class CharactersSearchContainer extends React.Component {
  state = {
    results: [],
    searchKey: "",
    searchCompleted: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetchCharactersFromApi(this.state.searchKey).then((rawData) =>
      this.setState({
        results: rawData.data.results,
      })
    );

    this.setState({
      results: [],
      searchKey: "",
      searchCompleted: true,
    });
  };

  handleChange = (event) => {
    this.setState({
      searchKey: event.target.value,
    });
  };

  saveCharacter = (character) => {
    let characterData = {
      name: character.name,
      description: character.description,
      thumbnail: character.thumbnail.path,
      image: character.thumbnail.path,
    };

    this.props.saveCharacter(characterData);
    this.props.history.push("/characters");
  };

  render() {
    return (
      <div class="container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Label> Search Characters: </Form.Label>
          <Form.Control
            type="text"
            name="nameStartingWith"
            placeholder="Names Starting With"
            value={this.state.searchKey}
            onChange={this.handleChange}
          />
        </Form>
        {this.state.results.length === 0 &&
        this.state.searchCompleted === true ? (
          <NoResult />
        ) : (
          <Characters
            characters={this.state.results}
            saveCharacter={this.saveCharacter}
          />
        )}
      </div>
    );
  }
}

export default connect(null, { saveCharacter })(CharactersSearchContainer);
