import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import TransactionItem from './transactionItem'

export default function TransactionList() {
  const [transaction , setTransaction] = useState([])
  useEffect(()=>{
    axios
    .get(`/transactions`)
    .then((res)=>{
      setTransaction(res.data)
    })
    .catch((err)=>{
      console.error(err)
    })
  },[])
  return (
    <section className='flex flex-col'>
      {transaction.map((item)=>{
        return <TransactionItem key={item._id} transactionData={item} />
      })}
    </section>
  )
}
