import React from 'react'
import TicketItem from './ticketItem'
export default function TicketList({ticket}) {
  return (
    <section className='mx-auto max-w-lg space-y-4 p-2'>
      {ticket.map((item) => {
        return <TicketItem key={item._id} ticketData={item} />
      })}
    </section>
  )
}
