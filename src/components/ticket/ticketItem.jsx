import React from 'react'
import { getTimeDate,getDayDateShort } from '../../utils/processDate'

export default function TicketItem({ticketData}) {
  const { movie,showtime,booking_seat, ticket_code } = ticketData
  return (
    <div className='grid grid-cols-[100px_1fr] sm:grid-cols-[150px_1fr] bg-gray-100 shadow-md rounded-md'>
      <img src={movie.poster} alt={movie.title} className='w-full h-full object-cover'/>
      <article className='p-2 items-center grid grid-rows-[auto_auto_auto] my-auto'>
        <div className='grid grid-cols-2 gap-2 text-center w-full py-5'>
          <div>
            <h3 className='text-sm'>Movie</h3>
            <h3 className='font-semibold'>{movie.title}</h3>
          </div>
          <div>
            <h3 className='text-sm'>Date</h3>
            <p className='font-semibold'>{getDayDateShort(showtime.date)}</p>
          </div>
          <div>
            <h3 className='text-sm'>Time</h3>
            <p className='font-semibold'>{getTimeDate(showtime.date)}</p>
          </div>
          <div>
            <h3 className='text-sm'>Seats</h3>
            <p className='font-semibold'>{booking_seat.join(', ')}</p>
          </div>
        </div>
        <div className=' border-b-2 border-dashed border-black'/>
        <div className='text-center py-2'>
          <h2 className='font-bold text-lg bg-'>Ticket Code: {ticket_code}</h2>
        </div>
      </article>
    </div>
  )
}
