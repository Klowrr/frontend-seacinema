import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { getTimeDate } from '../../utils/processDate';
import Skeleton from 'react-loading-skeleton';


export default function ShowtimeList({movieId, setShowtime, showtime, loadingMovie}) {
  const [showtimes, setShowtimes] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`/showtimes/${movieId}`)
      .then((res)=>{
        setShowtimes(res.data)
      })
      .catch((err)=>{
        console.error(err.response.data.message)
      })
      .finally(()=>setLoading(false))
  },[movieId])

  if (loading || loadingMovie){
    return(
      <div className='flex gap-2 flex-wrap my-4'>
        {Array(6).fill(0).map((_,i)=>
          <div key={i} className='rouded-lg'>
            <Skeleton height={25} width={50}/>
          </div>
        )}
      </div>
    )
  }
  if (showtimes.length === 0) return <p>No showtimes available</p>
  return (
    <section className='flex gap-2 flex-wrap my-4'>
      {showtimes.map((item)=>{
        const getTime = getTimeDate(item.date)
        return (
          <button className={`${showtime._id === item._id? 'bg-blue-400 text-white':''} border-2 rounded-lg px-2 border-blue-400`} key={item._id} onClick={()=>setShowtime(item)}>{getTime}</button>
        )
      })}
    </section>
  )
}
