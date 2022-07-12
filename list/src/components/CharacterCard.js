import React from 'react';

export const CharcterCard = ({ character, col, row }) => {

    return (<div className="card" style={{ gridColumn: col, gridRow: row }}>
        <img className="image" src={character.image} alt={character.name} />
        <div className="info">
            <p className="name">{character.id}.{character.name}</p>
            <p className="status"><span className="feature">Status:</span> {character.status}</p>
            <p className="species"><span className="feature">Species: </span> {character.species}</p>
            {character.type !== "" &&
                <p className="type"><span className="feature">Type: </span> {character.type}</p>
            }
            <p className="gender"><span className="feature">Gender: </span> {character.gender}</p>
            <p className="origin"><span className="feature">Origin: </span> {character.origin.name}</p>
            <p className="location"><span className="feature">Location: </span> {character.location.name}</p>
            {character.episode.length === 1
                ?
                <p className="episodes">Appeared in {character.episode.length} episode.</p>
                :
                <p className="episodes">Appeared in {character.episode.length} episodes.</p>
            }
        </div>
    </div>
    )
}