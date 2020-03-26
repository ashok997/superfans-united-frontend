import React from "react";
import Card from "react-bootstrap/card";
import CardColumns from "react-bootstrap/CardColumns";
import CharacterCard from "./CharacterCard";
import CharacterForm from "./CharacterForm";
import CharacterSave from "./CharacterSave";

const Characters = props => {
  const characterCards =
    props.characters.length > 0 &&
    props.characters.map(character => (
      <Card border="info" bg="light" style={{ width: "20rem" }}>
        <Card.Body>
          <CharacterCard character={character} key={character.id} />
          {character.created_at ? (
            <CharacterForm
              character={character}
              upVote={props.upVote}
              addComment={props.addComment}
              key={character.id + "-form"}
            />
          ) : (
            <CharacterSave
              character={character}
              saveCharacter={props.saveCharacter}
              key={character.id + "-save"}
            />
          )}
        </Card.Body>
      </Card>
    ));

  return <CardColumns>{characterCards}</CardColumns>;
};

export default Characters;
