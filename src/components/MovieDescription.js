import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const MovieDescription = ({ movies }) => {
  const params = useParams();
  console.log(params);
  const movie = movies.find((el) => Number(el.id) === Number(params.id));
  console.log(movie);
  return (
    <div>
      discreption
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.poster} alt={movies.title} />
        <Card.Body>
          <Card.Title className="cardtitle">{movie.title}</Card.Title>
          <Card.Text>
            <Rating
              className="rating"
              ratingValue={movie.rate}
              readonly={true}
            />
          </Card.Text>
          <Card.Text>
          {movie.description}
          </Card.Text>

          <Link to={`/MovieList`}>
            <Button variant="primary" className="button">List of Movies</Button>
          </Link>
          <Link to={`/MovieDescription/Ourtrailer/${movie.id}`}>
            <Button variant="primary" className="button">Movie trailer</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieDescription;
