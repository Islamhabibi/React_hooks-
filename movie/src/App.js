import './App.css';
import React, {useState} from 'react';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filter from './components/Filter';
import MovieCard from "./components/MovieCard";
import MovieList from"./components/MovieList";


function App() {
  const [movies, setMovies]= useState([
    {
      title:"Pokémon",
      description:"Koko grandit dans la jungle avec un Zarude solitaire. En rencontrant Sacha et Pikachu, il découvre le monde des humains et apprend que son environnement est menacé.",
      posterURL:"https://occ-0-4609-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe86Y3FMoF2hXeZWcLeUc12d4tP2LptiD7m36n7JamuteJdgnPI6ABMPsWnB4SIQgb_3peceGn6WM8d93tJY5-GXxysWPE9JlRDf-ToW28FmIJhcZv8axgjWJpQmVySs-uQE.jpg?r=c97",
      rating:"4"
    },
    {
      title:"Violet Evergarden : Pour mémoire",
      description:"Dans cet épisode récapitulatif de la bouleversante série primée et superbement animée, une ancienne enfant-soldat profondément marquée par la guerre devient rédactrice de lettres.",
      posterURL:"https://occ-0-4609-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWy-7t7Wyvtij54kk7NiNjBTtXVxgpSwj1Ld0l6GicDNmtzkNwKiZYmb9I4mTVqt7fjhYm5kbRhY1pA6fIP-I1TuRf6kHsH7lWAoyxsKSmHf-HuO_AXi20gHuq6IHlF31r9Q.jpg?r=f2b",
      rating:"5"
    },
    {
      title:"GODZILLA La planète des monstres",
      description:"Un groupe de réfugiés tente de recoloniser la Terre 20 000 ans après sa conquête par Godzilla. Mais un jeune homme est bien déterminé à prendre sa revanche.",
      posterURL:"https://occ-0-4609-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa6bVqqfin68k0ADQd71iI5GsFy5uSYN2iQXJRIREVGbPAVOsBfffCc37ZAz9GbdVNxCgjXCU85dZIC_URF3SbmWESxu4sOpwmuy-tKCtjqfgoeLNLrDCRhnN51YFEWlWlDR.jpg?r=256",
      rating:"3"
    }
  ]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const filterMovies = ({ title, rating }) => {
    const filtered = movies.filter(
      (movie) =>
        (!title || movie.title.toLowerCase().includes(title.toLowerCase())) &&
        (!rating || movie.rating >= rating)
    );
    setFilteredMovies(filtered);
  };

  
  return (
    <div className="root">
      <h1>My Movie App</h1>
      <Row>
        <Col lg={4}>
          <Filter onFilter={filterMovies} />
        </Col>
        <Col lg={8}>
          <MovieList movies={filteredMovies} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
