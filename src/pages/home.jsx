import React, {useEffect, useState} from 'react'
import MovieList from '../components/movie/movieList'
import axios from '../api/axios';

export default function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios
    .get('/movies')
    .then(res => setMovies(res.data))
    .finally(() => setLoading(false))
  }, []);
  return (
    <MovieList movies={movies} loading={loading}/>
  )
}
