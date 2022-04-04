import React from 'react';

const ReviewCard = (props) => {
    const {id,name,image,review,rating}=props.card;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{rating}</h2>
            <h3>{id}</h3>
            <img src={image} alt="" />
        </div>
    );
};

export default ReviewCard;