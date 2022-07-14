import React from 'react';

export const Error = ({ message }) => {
    return (
        <div className="error" >
            <p className="error-message">An error has occurred: {message}</p>
            <img src="https://www.pngplay.com/wp-content/uploads/10/Rick-And-Morty-PNG-Photo-Image.png" alt="error" />

        </div>
    )
}