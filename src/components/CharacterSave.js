import React from 'react'

const CharacterSave = ({ character, saveCharacter }) => {
    return (

        <button
            className="saveCharacter-button"
            onClick={() => saveCharacter(character)} >
            Save
        </button>

    )
}

export default CharacterSave