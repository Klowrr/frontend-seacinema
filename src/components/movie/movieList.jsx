import React, { useState, useEffect } from 'react'
import axios from '../../api/axios';
import MovieItem from './movieItem';

export default function MovieList() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios
    .get('/movies')
    .then(res => setMovies(res.data))
  }, []);
  return (
    <section className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 max-w-6xl mx-auto p-4'>
      {movies.map((movie)=>{
        return <MovieItem key={movie._id} movieData={movie} />
      })}
    </section>
  )
}
