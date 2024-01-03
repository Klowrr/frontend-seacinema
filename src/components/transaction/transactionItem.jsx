import React from 'react'
import { faFilm, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getDayDateShort } from '../../utils/processDate'
export default function TransactionItem({transactionData}) {
  const {type, movie_title, total, status, createdAt} = transactionData
  const typeIcon = type === 'buy' ? faFilm : faMoneyBill
  return (
    <div className='flex justify-between items-center px-0 md:px-4 py-2'>
      <div className='flex items-center gap-4'>
        <FontAwesomeIcon icon={typeIcon} size='lg'/>
        <div>
          <h3 className='font-bold'>{type === 'buy'? movie_title: type}</h3>
          <p className='text-sm'>{getDayDateShort(createdAt)}</p>
        </div>
      </div>
      <div className='min-w-fit'>
        <p>IDR {total}</p>
        <p className='text-right '>{status}</p>
      </div>
    </div>
  )
}
