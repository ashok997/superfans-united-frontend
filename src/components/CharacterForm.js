import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class CharacterForm extends React.Component {
  state = {
    comment: ""
  };

  onChange = event => {
    this.setState({
      comment: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.props.character, this.state.comment);
    this.setState({
      comment: ""
    });
  };

  render() {
    const { character, handleVote } = this.props;
    return (
      <>
        <br></br>
        <Button
          variant="outline-danger"
          className="upVote-button"
          onClick={() => handleVote(character, "upvote")}
        >
          &#128077;
        </Button>
        <Button
          className="downVote-button"
          variant="outline-danger"
          onClick={() => handleVote(character, "downvote")}
        >
          &#128078;
        </Button>
        <br />
        <Form onSubmit={this.onSubmit}>
          <Form.Label> Comment: </Form.Label>
          <Form.Control
            type="text"
            name="comment"
            value={this.state.comment}
            onChange={this.onChange}
            placeholder="comment"
          />
        </Form>
        <br></br>
      </>
    );
  }
}

export default CharacterForm;
