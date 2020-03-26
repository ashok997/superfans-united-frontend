import React from "react";

const CharacterSave = ({ character, saveCharacter }) => {
  return (
    <button
      className="saveCharacter-button"
      onClick={() => saveCharacter(character)}
    >
      &#10084;
    </button>
  );
};

export default CharacterSave;
