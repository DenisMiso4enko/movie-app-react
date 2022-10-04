import React from 'react';

const Movie = ({data: { id, year, title, sumary, large_cover_image},}) => {
    console.log(large_cover_image);
    return (
        <div className="movie" id={id}>
            <h1>{title}</h1>
            <p>{year}</p>
            <img src={large_cover_image} alt={title} />
        </div>
    );
};

export default Movie;