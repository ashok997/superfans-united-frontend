import React from "react";
import Card from "react-bootstrap/card";
import Badge from "react-bootstrap/Badge";
import { getElementError } from "@testing-library/react";

const CharacterCard = ({ character }) => {
  return (
    <>
      <Card.Title>{character.name}</Card.Title>
      <img
        class="rounded mx-auto d-block"
        src={`${character.thumbnail.path || character.thumbnail}.jpg`}
        alt="thumbnail"
        width="225"
        height="225"
      />
      <Card.Text>{character.description}</Card.Text>

      {character.user_characters && <Badge variant="info">Comments</Badge>}
      {character.user_characters &&
        character.user_characters.map(entry => (
          <div>
            {entry.comments && entry.comments}
            {entry.user && entry.comments ? <> By: {entry.user.name}</> : <></>}
          </div>
        ))}
      <br></br>
      {character.user_characters && <Badge variant="info">Meta Score:</Badge>}
      <div>
        {character.user_characters &&
          character.user_characters
            .map(entry => entry.votes)
            .reduce((a, b) => a + b, 0)}
      </div>
    </>
  );
};

export default CharacterCard;
