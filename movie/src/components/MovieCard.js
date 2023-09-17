import React from "react";
import Card from "react-dom";
import {Rating} from 'react-simple-star-rating';

var MovieCard = ({title,description,posterURL,rating} )=>{
     
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterURL}  alt={title}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
        <Rating initialValue={rating}/>
        </Card.Text>
        
      </Card.Body>
       
       
    </Card>
};
export default MovieCard;