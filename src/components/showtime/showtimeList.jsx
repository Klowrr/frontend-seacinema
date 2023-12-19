import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { getTimeDate } from '../../utils/processDate';
export default function ShowtimeList({movieId, setShowtime, showtime}) {
  const [showtimes, setShowtimes] = useState([]);
  useEffect(() => {
    axios
      .get(`/showtimes/${movieId}`)
      .then((res)=>{
        setShowtimes(res.data)
      }).catch((err)=>{
        console.log(err.response.data.message)
      })
  })
  if (showtimes.length === 0) return
  return (
    <section>
      {showtimes.map((item)=>{
        const getTime = getTimeDate(item.date)
        return (
          <button className={`${showtime._id === item._id? 'bg-blue-400 text-white':''} border-2 rounded-lg px-2 border-blue-400`} key={item._id} onClick={()=>setShowtime(item)}>{getTime}</button>
        )
      })}
    </section>
  )
}
