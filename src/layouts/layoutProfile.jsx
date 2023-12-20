import React from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink,Outlet } from 'react-router-dom';
const navProfile = [
  {
    name:'Profile',
    path:'me'
  },
  {
    name:'Wallet',
    path:'wallet'
  },
]
export default function LayoutProfile() {
  let location = useLocation();
  return (
    <section>
      <nav className='flex gap-2 justify-center my-5'>
        {navProfile.map((item,index)=>{
          let activeLinkStyle = ''
          if (location.pathname === `/profile/${item.path}`){
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
    </section>
  )
}
