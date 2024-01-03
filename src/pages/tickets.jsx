import React, { useEffect, useState} from 'react'
import TicketList from '../components/ticket/ticketList'
import axios from '../api/axios'
import { ThreeDots } from 'react-loader-spinner'

export function TicketsActive() {
  const [ticket, setTicket] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    axios
    .get(`/tickets`)
    .then((res)=>{
      setTicket(res.data.filter((item)=>item.status==='active'))
    })
    .catch((err)=>{
      console.error(err)
    })
    .finally(()=>setLoading(false))
  },[])
  if (loading) return (
    <div className='flex justify-center'>
      <ThreeDots
        color='#34a1eb' 
        visible={true}
        height="50"
        width="50"
      />
    </div>
  )
  return (
    <section>
      <TicketList ticket={ticket}/>
    </section>
  )
}

export function TicketsPassed() {
  const [ticket, setTicket] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    axios
    .get(`/tickets`)
    .then((res)=>{
      setTicket(res.data.filter((item)=>item.status==='used'))
    })
    .catch((err)=>{
      console.error(err)
    })
    .finally(()=>setLoading(false))
  },[])
  if (loading) return (
    <div className='flex justify-center'>
      <ThreeDots 
        color='#34a1eb' 
        visible={true}
        height="50"
        width="50"
      />
    </div>
  )
  return (
    <section>
      <TicketList ticket={ticket}/>
    </section>
  )
}

export function TicketsCanceled() {
  const [ticket, setTicket] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    axios
    .get(`/tickets`)
    .then((res)=>{
      setTicket(res.data.filter((item)=>item.status==='refunded'))
    })
    .catch((err)=>{
      console.error(err)
    })
    .finally(()=>setLoading(false))
  },[])
  if (loading) return (
    <div className='flex justify-center'>
      <ThreeDots 
        color='#34a1eb' 
        visible={true}
        height="50"
        width="50"
      />
    </div>
  )
  return (
    <section>
      <TicketList ticket={ticket}/>
    </section>
  )
}