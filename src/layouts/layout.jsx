/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Navbar from '../components/navbar'
import { useAuth } from '../context/auth-context'

export default function Layout({children}) {
  const { user } = useAuth()
  return (
    <>
      <Navbar user={user}/>
      <main className='min-h-[90vh]'>
        {children}
      </main>
    </>
  )
}
