import React from 'react';

export const NoMatches = ({ query }) => {
    return (
        <div className="error no-matches" >
            <p className="error-message"> No matches for {query} :(</p>
            <img src="https://www.pngplay.com/wp-content/uploads/10/Rick-And-Morty-PNG-Photo-Image.png" alt="error" />

        </div>
    )
};