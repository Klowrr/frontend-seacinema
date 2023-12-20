import React from 'react'
import { useLocation, Outlet, NavLink } from 'react-router-dom'

const navTicket = [
  {
    name:'Upcoming',
    path:'upcoming'
  },
  {
    name:'Passed',
    path:'passed'
  },
  {
    name:'Canceled',
    path:'canceled'
  },
]

export default function LayoutTicket() {
  let location = useLocation();
  return (
    <>
      <nav className='flex gap-2 justify-center my-5'>
        {navTicket.map((item,index)=>{
          let activeLinkStyle = ''
          if (location.pathname === `/tickets/${item.path}`){
            activeLinkStyle = "border-b-2 border-blue-300 text-blue-700"
          } 
          return (
            <NavLink to={item.path} key={index} className={`hover:border-b-2 hover:border-blue-300 ${activeLinkStyle}`}>{item.name}</NavLink>
          )
        })}
      </nav>
      <section className='px-4'>
        <Outlet/>
      </section>
    </>
  )
}
