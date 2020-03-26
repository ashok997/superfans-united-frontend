import React from "react";
import Card from "react-bootstrap/card";

const CharacterSave = ({ character, saveCharacter }) => {
  return (
    <Card body>
      <button
        className="saveCharacter-button"
        onClick={() => saveCharacter(character)}
      >
        &#10084;
      </button>
    </Card>
  );
};

export default CharacterSave;
