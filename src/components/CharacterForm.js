import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CharacterForm = ({ character, upVote, addComment }) => {
  return (
    <>
      <br></br>
      <Button
        variant="outline-info"
        className="upVote-button"
        onClick={() => upVote(character, "upvote")}
      >
        &#128077;
      </Button>
      <Button
        className="downVote-button"
        variant="outline-info"
        onClick={() => upVote(character, "downvote")}
      >
        &#128078;
      </Button>
      <br />
      <Form onSubmit={comment => addComment(character, comment)}>
        <Form.Label> Comment: </Form.Label>
        <Form.Control type="text" name="comment" placeholder="comment" />
      </Form>
      <br></br>
    </>
  );
};

export default CharacterForm;
