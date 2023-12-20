/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
export default function Layout({children}) {
  return (
    <>
      <Navbar/>
      <main className='min-h-[90vh]'>
        <Outlet/>
      </main>
    </>
  )
}
