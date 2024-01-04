import React from 'react'
import { Link } from 'react-router-dom'
export default function MovieItem({movieData}) {
  const { _id ,title, poster } = movieData
  return (
    <Link to={`/movie/${_id}`} className='max-w-sm rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all ease-in-out'>
      <img src={poster} alt={`Poster ${title}`} className='w-full object-cover' width={300} height={450}/>
      <h1 className='p-3 font-semibold'>{title}</h1>
    </Link>
  )
}
