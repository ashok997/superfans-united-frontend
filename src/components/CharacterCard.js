import React from "react";
import Card from "react-bootstrap/card";
import Badge from "react-bootstrap/Badge";

const CharacterCard = ({ character }) => {
  return (
    <>
      <Card.Title>{character.name}</Card.Title>
      <Card.Img
        src={`${character.thumbnail.path || character.thumbnail}.jpg`}
      />
      <Card.Text>{character.description}</Card.Text>

      {character.user_characters && <Badge variant="info">Comments</Badge>}
      {character.user_characters &&
        character.user_characters.map(entry => (
          <div>
            {entry.user && entry.comments ? <>{entry.user.name}: </> : <></>}
            {entry.comments && entry.comments}
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
