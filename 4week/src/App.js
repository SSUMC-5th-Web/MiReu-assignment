import React from 'react';
import Movie from "./Movie/Movie.jsx";
import { dummy } from "./movieDummy.js";
import { AppContainer } from './Movie/MovieStyles.jsx';

function App() {
  return (
    <AppContainer>
      {dummy.results.map((item, index) => (
        <Movie
          key={index}
          title={item.title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
          overview={item.overview}
        />
      ))}
    </AppContainer>
  );
}

export default App;
