import React from 'react'
import MovieItem from './movieItem';
import Skeleton from 'react-loading-skeleton';

export default function MovieList({movies, loading}) {
  return (
    <section className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 max-w-6xl mx-auto p-4'>
      {loading && Array(6).fill(0).map((_,i)=>
        <div key={i} className='w-full rouded-lg'>
          <Skeleton height={300} />
        </div>
      )}
      {movies.map((movie)=>{
        return <MovieItem key={movie._id} movieData={movie} />
      })}
    </section>
  )
}
