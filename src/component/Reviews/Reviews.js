import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import Usehook from '../Usehook/Usehook';

const Reviews = () => {
    const[cards,setCards]=Usehook()
    
    return (
        <div>
           
           {cards.map((card)=>
               <ReviewCard key={card.id} card={card}></ReviewCard>
           )}
        </div>
    );
};

export default Reviews;