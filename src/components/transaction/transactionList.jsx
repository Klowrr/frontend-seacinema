import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import TransactionItem from './transactionItem'

export default function TransactionList() {
  const [transaction , setTransaction] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    axios
    .get(`/transactions`)
    .then((res)=>{
      setTransaction(res.data)
    })
    .catch((err)=>{
      console.error(err)
    })
    .finally(()=>setLoading(false))
  },[])
  if (loading) return <p className='text-center'>Loading...</p>
  return (
    <section className='flex flex-col'>
      {transaction.map((item)=>{
        return <TransactionItem key={item._id} transactionData={item} />
      })}
    </section>
  )
}
