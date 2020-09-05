import React from "react";
import Card from "react-bootstrap/card";

const CharacterSave = ({ character, saveCharacter }) => {
  return (
    <Card body>
      <button
        className="saveCharacter-button"
        onClick={() => saveCharacter(character)}
      >
        <span>&#10084;</span>
      </button>
    </Card>
  );
};

export default CharacterSave;
