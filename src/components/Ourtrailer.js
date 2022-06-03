import React from "react";
import { useParams } from "react-router-dom";

const Ourtrailer = ({ movies }) => {
  const params = useParams();
  console.log(params);
  const movie = movies.find((el) => Number(el.id) === Number(params.id));
  console.log(movie);
  return (
    <div>
      <iframe
         width="1500"
         height="500"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
  );
};

export default Ourtrailer;
