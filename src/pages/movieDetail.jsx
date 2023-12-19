import React, { useEffect, useState } from 'react'
import Layout from '../layouts/layout'
import axios from '../api/axios';
import { useParams, useNavigate } from 'react-router-dom';
import ShowtimeList from '../components/showtime/showtimeList';
import { getDayDate } from '../utils/processDate';
import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBooking } from '../context/booking-context';
import { toast } from 'react-toastify';
export default function MovieDetail() {
  const [movie, setMovie] = useState([]);
  const [showtime, setShowtime] = useState({});
  const [loading, setLoading] = useState(true);
  const { setMovieData, setShowtimeData } = useBooking()
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
      axios
      .get(`/movies/${id}`)
      .then((res)=>{
        setMovie(res.data)
      })
      .catch((err)=>{
        console.log(err.response.data.message)
      })
      .finally(()=>{
        setLoading(false)
      })
  }, [id]);

  const handleBook = () => {
    if (Object.keys(showtime).length === 0) return toast.warn('Please select showtime first')
    setMovieData(movie)
    setShowtimeData(showtime)
    navigate('/transactions')
  }
  if(loading) return <p>Loading...</p>
  return (
    <Layout>
      <section className='max-w-4xl md:mx-auto space-y-4 my-4 mx-5 rounded-lg'>
        <Link to='/'>&lt; Back</Link>
        <section className='flex flex-wrap shadow-lg'>
          <img src={movie.poster} className='object-cover h-[50vh] md:h-[70vh] mx-auto lg:mx-0' alt='movie-poster'/>
          <div className='p-4 flex flex-col justify-between flex-1'>
            <section className='space-y-4'>
              <div>
                <h1 className='text-2xl font-bold'>{movie.title} <span className='text-sm font-normal'>{getDayDate(movie.release_date)}</span></h1>
                <div className='mt-2'><span className='bg-blue-300 px-2 rounded'>R {movie.age_rating}</span></div>
              </div>
              <div className='flex items-center space-x-2'>
                <h1 className='text-lg font-bold '> Rating :</h1>
                <FontAwesomeIcon icon={faStar} size='sm' className='text-yellow-400'/>
                <p>({movie.rating})</p>
              </div>
              <div>
                <h3 className='font-bold text-lg'>Description</h3>
                <p>{movie.description}</p>
              </div>
              <div>
                <h3 className='font-bold text-lg'>Showtimes</h3>
                <ShowtimeList movieId={id} setShowtime={setShowtime} showtime={showtime}/>
              </div>
            </section>
            <div className='flex items-center justify-end gap-4'>
              <h1 className='text-lg font-bold'>IDR {movie.price}</h1>
              <button className='btn-primary' onClick={handleBook}>Book</button>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  )
}
