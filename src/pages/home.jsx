import React, {useEffect, useState} from 'react'
import MovieList from '../components/movie/movieList'
import axios from '../api/axios';
import { Grid } from 'react-loader-spinner'

export default function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios
    .get('/movies')
    .then(res => setMovies(res.data))
    .finally(() => {
        setLoading(false)
      })
  }, []);
  if (loading) {
    return (
    <div className='absolute top-0 bg-white h-screen w-screen flex justify-center items-center'>
      <Grid 
        color='#34a1eb' 
        visible={true}
        height="50"
        width="50"
      />
    </div>)
  }
  return (
    <MovieList movies={movies} loading={loading}/>
  )
}
