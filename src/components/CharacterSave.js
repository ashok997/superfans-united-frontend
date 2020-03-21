import React from 'react'

const CharacterSave = ({ character, saveCharacter }) => {
    return (

        <div>
            <button
                className="saveCharacter-button"
                onClick={() => saveCharacter(character)} >
                Save
        </button>
        </div>
    )
}

export default CharacterSave