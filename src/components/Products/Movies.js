import React, { useContext } from 'react';

import Context from '../../context';

import Index from './index.js';

const Movies = () => {

  const { movies } = useContext(Context);

  return (
    <div className="movies">
      {movies.map(movie => (
        <Index key={movie.id} {...movie} />
      ))}
    </div>
  )
}

export default Movies;
