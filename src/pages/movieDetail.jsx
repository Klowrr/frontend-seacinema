import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import { useParams, useNavigate } from 'react-router-dom';
import ShowtimeList from '../components/showtime/showtimeList';
import { getDayDate } from '../utils/processDate';
import { Link } from 'react-router-dom';
import { faStar, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBooking } from '../context/booking-context';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
export default function MovieDetail() {
  const [movie, setMovie] = useState({});
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
      console.error(err.response.data.message)
    })
    .finally(()=>{
      setLoading(false)
    })
  }, [id]);

  const handleBook = (e) => {
    e.preventDefault()
    if (Object.keys(showtime).length === 0) return toast.warn('Please select showtime first')
    setMovieData(movie)
    setShowtimeData(showtime)
    navigate('/transactions')
  }
  return (
    <section className='max-w-4xl md:mx-auto space-y-4 my-4 mx-5 rounded-lg'>
      <Link to='/'>
        <FontAwesomeIcon icon={faChevronCircleLeft} size='lg' className='m-auto'/>
      </Link>
      <section className='flex flex-wrap shadow-lg'>
        {loading ? <Skeleton width={300} height={450}/> :<img src={movie.poster} className='object-cover h-[450px] md:h-[450px] mx-auto lg:mx-0 ' width={300} height={450} alt='movie-poster'/>}
        <div className='p-4 flex flex-col justify-between flex-1 min-w-[300px]'>
          <section className='space-y-4'>
            <div>
              {loading ? <Skeleton width={200} height={20}/> : 
                <h1 className='text-2xl font-bold'>{movie.title} <span className='text-sm font-normal'>{getDayDate(movie.release_date)}</span></h1>
              }
              <div className='mt-2'><span className='bg-blue-300 px-2 rounded'>R {loading ? 'x':movie.age_rating}</span></div>
            </div>
            <div className='flex items-center space-x-2'>
              <h1 className='text-lg font-bold '> Rating :</h1>
              <FontAwesomeIcon icon={faStar} size='sm' className='text-yellow-400'/>
              <p>({loading ? 'x' :movie.rating})</p>
            </div>
            <div>
              <h3 className='font-bold text-lg'>Description</h3>
              {loading && <Skeleton width={300} height={50}/>}
              <p>{movie.description}</p>
            </div>
            <div>
              <h3 className='font-bold text-lg'>Showtimes</h3>
              <ShowtimeList movieId={id} setShowtime={setShowtime} showtime={showtime} loadingMovie={loading}/>
            </div>
          </section>
          <div className='flex items-center justify-end gap-4'>
            <h1 className='text-lg font-bold'>IDR {movie.price}</h1>
            <button className='btn-primary' onClick={handleBook}>Book</button>
          </div>
        </div>
      </section>
    </section>
  )
}
