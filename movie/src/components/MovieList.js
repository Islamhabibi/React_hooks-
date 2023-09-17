import React from "react";
import MovieCard from "./MovieCard";

var MovieList = ({movies}) => {
     
        {movies.map((el, index) =>
            (<MovieCard movie={el} key={index}/>))
        }
    
   

}
export default MovieList;