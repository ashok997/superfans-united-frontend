import React from "react";
import Card from "react-bootstrap/card";
import Badge from "react-bootstrap/Badge";

const CharacterCard = ({ character }) => {
  return (
    <Card body>
      <h5>{character.name}</h5>
      <p>
        <img
          class="rounded mx-auto d-block"
          src={`${character.thumbnail.path || character.thumbnail}.jpg`}
          alt="thumbnail"
          width="225"
          height="225"
        />
      </p>
      <p>{character.description}</p>

      {character.user_characters && <Badge variant="info">Comments</Badge>}
      {character.user_characters &&
        character.user_characters.map(entry => (
          <div>
            {entry.comments && entry.comments}
            {entry.user && entry.comments ? <> By: {entry.user.name}</> : <></>}
          </div>
        ))}
      {character.user_characters && <Badge variant="info">Votes</Badge>}
      {character.user_characters &&
        character.user_characters.map(entry => (
          <div>
            {entry.votes && entry.votes}
            {entry.user && entry.votes ? <> By: {entry.user.name} </> : <></>}
          </div>
        ))}
    </Card>
  );
};

export default CharacterCard;
