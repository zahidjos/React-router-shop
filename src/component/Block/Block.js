import React from 'react';
import { Container } from 'react-bootstrap';
import './Block.css';



const Block = () => {
   
    
    return (
        <div>
            <Container>
                <div className="question_text">
                    <div className="first_question">
                    <h3>What is Context API?</h3>
                    <p>Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around.
                    This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and soon.  Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. Sometimes people use shared state across nested components instead of just passing it as props. The Context API aims to solve this problem, and provides a way to share data values like this between components without having to pass a prop through every level of the app tree.
                   </p>
                    </div>
                    <div className="second_question">

                         <h3>What are Semantic Tags</h3>
                         <p>Answer:HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, its needs changed. Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them. 
                         Examples of semantic HTML tags include:
<ul>
    <li>Header tags h1 through h6</li>
    <li>blockquote</li>
    <li>code</li>
    <li>em</li>
    
    



</ul>
 </p>
 </div>
                    
       </div>
            </Container>
           
        </div>
    );
};

export default Block;