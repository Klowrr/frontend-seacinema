import React, { useEffect, useState} from 'react'
import TicketList from '../components/ticket/ticketList'
import axios from '../api/axios'

export function TicketsActive() {
  const [ticket, setTicket] = useState([])
  useEffect(()=>{
    axios
    .get(`/tickets`)
    .then((res)=>{
      setTicket(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <section>
      <TicketList ticket={ticket}/>
    </section>
  )
}

export function TicketsPassed() {
  const [ticket, setTicket] = useState([])
  useEffect(()=>{
    axios
    .get(`/tickets`)
    .then((res)=>{
      setTicket(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <section>
      <TicketList ticket={ticket}/>
    </section>
  )
}

export function TicketsCanceled() {
  const [ticket, setTicket] = useState([])
  useEffect(()=>{
    axios
    .get(`/tickets`)
    .then((res)=>{
      setTicket(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <section>
      <TicketList ticket={ticket}/>
    </section>
  )
}