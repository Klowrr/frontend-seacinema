import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { getTimeDate } from '../../utils/processDate';
export default function ShowtimeList({movieId, setShowtime, showtime}) {
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
  if (showtimes.length === 0) return
  if (loading) return <p className='text-center'>Loading...</p>
  return (
    <section className='flex gap-2 flex-wrap '>
      {showtimes.map((item)=>{
        const getTime = getTimeDate(item.date)
        return (
          <button className={`${showtime._id === item._id? 'bg-blue-400 text-white':''} border-2 rounded-lg px-2 border-blue-400`} key={item._id} onClick={()=>setShowtime(item)}>{getTime}</button>
        )
      })}
    </section>
  )
}
