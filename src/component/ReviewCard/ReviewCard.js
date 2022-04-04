import React from 'react';
import './ReviewCard.css';
import { Container } from 'react-bootstrap';

const ReviewCard = (props) => {
    const {id,name,image,review,rating}=props.card;
    return (
        <div>
            <Container>
            <div className="reviewCard_part">
                <div className="review_img">
                  <img src={image} alt="" />
                  </div> 
                  <div className="review_text">
                      <h5>{name}</h5>
                      <p>{review}</p>
                      <h6>Rating: {rating} of 5</h6>
                      
                </div> 
            </div>
              
            </Container>
            
            
        </div>
    );
};

export default ReviewCard;