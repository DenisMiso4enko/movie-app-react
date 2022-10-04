import React from 'react';
import PropTypes from 'prop-types'

const Food = ({ data: { id, name, img, rating } }) => {
    return (
        <div className="card mb-3" id={id} style={{ width: '18rem' }}>
            <img src={img} alt={name} />
            <div className="card-body" style={{ color: 'black' }}>
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><strong>{rating} / 5.0</strong></p>
            </div>
        </div>
    );
};

Food.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    rating: PropTypes.number,
}

export default Food;