import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useAuth } from '../context/auth-context';

export default function Register() {
  const { register, loading } = useAuth()
  const [data, setData] = useState({
    name: "",
    age: "",
    username: "",
    password: "",
    confPassword: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.confPassword) return toast.error("Password and Confirm Password must be same");
    delete data.confPassword;
    register(data)
  }
  return (
    <section className='flex justify-center items-center min-h-screen bg-gray-200 px-5 md:px-0 md:gap-5 bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='bg-white px-5 py-7 rounded-lg text-center order-1 h-fit my-auto max-w-lg mx-auto w-full'>
        <h1 className='text-2xl font-bold mb-10'>REGISTER</h1>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <div className='grid grid-cols-3 gap-2'>
            <input 
              type='text' 
              placeholder='Name' 
              name='name' 
              className='input-text col-span-2' 
              onChange={handleChange}
            />
            <input 
              type='number' 
              placeholder='Age' 
              name='age' 
              className='input-text' 
              onChange={handleChange}
            />
          </div>
          <input 
            type='text' 
            placeholder='Username' 
            name='username' 
            className='input-text' 
            onChange={handleChange}
          />
          <input 
            type='password' 
            placeholder='Password' 
            name='password' 
            className='input-text'
            onChange={handleChange}
          />
          <input 
            type='password' 
            placeholder='Confirm Password' 
            name='confPassword' 
            className='input-text' 
            onChange={handleChange}
          />
          <button className='btn-primary'>{loading ? "Loding...":"Create Account"}</button>
          <p className='text-sm'>Already have an account? <Link to='/login' className='font-bold'>Sign in</Link></p>
        </form>
      </div>
    </section>
  )
}
