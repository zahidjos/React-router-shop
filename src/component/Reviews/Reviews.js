import React from 'react';
import './Reviews.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import Usehook from '../Usehook/Usehook';
import { Container } from 'react-bootstrap';

const Reviews = () => {
    const[cards,setCards]=Usehook()
    
    return (
        <div>
            <Container>
                <div className="review_part">
                {cards.map((card)=>
               <ReviewCard key={card.id} card={card}></ReviewCard>
           )}
                </div>
            </Container>
           
           
        </div>
    );
};

export default Reviews;