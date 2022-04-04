import React from 'react';
import Usehook from '../Usehook/Usehook';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import ReviewCard from '../ReviewCard/ReviewCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const[cards,setCards]=Usehook();
   let customer=[];
    
   
    
    
    
    if(cards){
        for(let i=0; i<3; i++){
            if(cards[i]){
               
                customer.push(cards[i]);
            }
        }
    }
    
    
    
    
    
    
    return (
        <div>
           
           <div className="home_container">
               <Container>
               <Row>
                 <Col lg={7}>
                   <div className="home_text">
                <h1>Welcome our car review <span>Website</span></h1>
                <p>The Toyota GR Supra sports car is another model in the Japanese manufacturer's current line-up with a name that's been dug out, dusted off and glued to the back of a new incarnation.</p>
                <button>Live demo</button>
               </div>
               
               </Col>
                   <Col lg={5}>
                   <div className="home_img">
                  <img src="https://i.ibb.co/sRznjZy/car.jpg" alt="" />
                    </div>
                   </Col>
               </Row>
               
               <div className="customer_part">
                   <h2>Customer Reviews</h2>
                   
                   <div className="customer_review">
                   {
                       customer.map((singleCustomer)=>
                       
                       
                        <ReviewCard key={singleCustomer?.id} card={singleCustomer}></ReviewCard> 
                        
                    )
                   }
                   </div>
                   
                   <Link to="/reviews">See All Reviews</Link>
                   
                  
                </div>
               
               </Container>
              
               
        </div> 
        </div>
    );
};

export default Home;