import React from "react";

const CharacterForm = ({ character, upVote, addComment }) => {
  return (
    <div>
      <br></br>
      <button
        className="upVote-button"
        onClick={() => upVote(character, "upvote")}
      >
        &#128077;
      </button>
      <button
        className="upVote-button"
        onClick={() => upVote(character, "downvote")}
      >
        &#128078;
      </button>
      <br />
      <form onSubmit={comment => addComment(character, comment)}>
        <input
          type="text"
          class="form-control"
          name="comment"
          placeholder="comment"
        />
        <button type="submit" value="Submit">
          Comment
        </button>
      </form>
      <br></br>
    </div>
  );
};

export default CharacterForm;
