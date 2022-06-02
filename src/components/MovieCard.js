import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
const MovieCard = ({ el }) => {
  return (
    <div className="image-container">
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.poster} alt={el.title} />
        <Card.Body>
          <Card.Title className="cardtitle">{el.title}</Card.Title>
          <Card.Text>
            <Rating className="rating" ratingValue={el.rate} readonly={true} />
          </Card.Text>
          <Link to={`/MovieList/MovieDescription/${el.id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
