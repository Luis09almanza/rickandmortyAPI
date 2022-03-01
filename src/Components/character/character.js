import React from "react";
import "./character.css"


const Character = (props) =>{
    const {character} = props
    return (
        <React.Fragment>
            <div className="Character__container">
                    <img
                        className="Character__image"
                        src={character.image}
                        alt={character.name}
                    />
                <div className="Character__data">
                    <h3 className="Character__name">{character.name}</h3>
                    <p className="Character__status">{character.status}</p>
                    <p className="Character_species">{character.species}</p>
                    <small>{character.gender}</small>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Character;