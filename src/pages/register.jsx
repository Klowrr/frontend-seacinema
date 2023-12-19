import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../api/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [data, setData] = useState({
    name: "",
    age: "",
    username: "",
    password: "",
    confPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    console.log(data)
    if (data.password !== data.confPassword) return toast.error("Password and Confirm Password must be same");
    delete data.confPassword;
    axios.post("/register", data).then((res) => {
      toast("Account Successfully Created")
      navigate("/login");
    }).catch((err) => {
      setLoading(false)
      toast.error(err.response.data.message)
    }).finally(()=>{
      setLoading(false)
    })
  }
  return (
    <section className='grid lg:grid-cols-2 min-h-screen bg-gray-200 px-5 md:px-0 md:gap-5'>
      <div className='order-2 overflow-hidden h-screen hidden lg:block  w-full'>
        <img src="/assets/movieposter.jpg" alt='movie_poster' className='w-full h-full object-top object-cover'/>
      </div>
      <div className='bg-white px-5 py-7 rounded-lg text-center order-1 h-fit my-auto max-w-lg mx-auto w-full'>
        <h1 className='text-2xl font-bold mb-10'>REGISTER</h1>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <div className='flex gap-2'>
            <input 
              type='text' 
              placeholder='Name' 
              name='name' 
              className='input-text flex-1' 
              onChange={handleChange}
            />
            <input 
              type='number' 
              placeholder='Age' 
              name='age' 
              className='input-text w-3/12' 
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
