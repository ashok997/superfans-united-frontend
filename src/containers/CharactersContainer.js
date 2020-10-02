import React from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../actions/fetchCharacters";
import { fetchUserCharacters } from "../actions/fetchUserCharacters";
import { addCommentOrVote } from "../actions/addCommentOrVote";
import { getCurrentUser } from "../actions/currentUser";

import Characters from "../components/Characters";

class CharactersContainer extends React.Component {
  componentDidMount() {
    if (this.props.location.pathname === "/characters") {
      this.props.fetchCharacters();
    } else {
      this.props.getCurrentUser();
      this.props.fetchUserCharacters();
    }
  }

  handleVote = (character, type) => {
    const vote = type === "upvote" ? { votes: 1 } : { votes: -1 };
    this.props.addCommentOrVote(character, vote);
  };

  addComment = (character, comment) => {
    this.props.addCommentOrVote(character, {
      comments: comment,
    });
  };

  render() {
    let characters = this.props.characters;
    return (
      <div class="character-container">
        {characters && (
          <Characters
            characters={characters}
            handleVote={this.handleVote}
            addComment={this.addComment}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characterReducer.characters,
  };
};

export default connect(mapStateToProps, {
  fetchCharacters,
  addCommentOrVote,
  fetchUserCharacters,
  getCurrentUser,
})(CharactersContainer);
