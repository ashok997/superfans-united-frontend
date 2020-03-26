import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <>
      <center>
        <h4>{character.name}</h4>
      </center>
      <p>{character.description}</p>
      <p>
        <img
          class="rounded mx-auto d-block"
          src={`${character.thumbnail.path || character.thumbnail}.jpg`}
          alt="thumbnail"
          width="250"
          height="250"
        />
      </p>
      <p>Comments:</p>
      {character.user_characters &&
        character.user_characters.map(entry => {
          return (
            entry.comments && (
              <p>
                {entry.comments} By: {entry.user.name}
              </p>
            )
          );
        })}
      <p>Votes:</p>
      {character.user_characters &&
        character.user_characters.map(entry => (
          <div>
            {entry.votes ? <> {entry.votes} </> : <></>}
            {entry.user && entry.votes ? <> By: {entry.user.name} </> : <></>}
          </div>
        ))}
    </>
  );
};

export default CharacterCard;
