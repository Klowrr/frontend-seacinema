import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/auth-context';
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useAuth();
  const handleSubmit = async(e) => {
    e.preventDefault()
    login(username, password)
  }
  return (
    <section className='flex justify-center items-center min-h-screen px-5 md:px-0 md:gap-5 bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='bg-white px-5 py-7 rounded-lg text-center order-1 h-fit my-auto max-w-lg mx-auto w-full'>
        <h1 className='text-2xl font-bold mb-10'>LOGIN</h1>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <input type='text' placeholder='Username' className='input-text' onChange={(e)=>setUsername(e.target.value)}/>
          <input type='password' placeholder='Password' className='input-text' onChange={(e)=>setPassword(e.target.value)}/>
          <button className='btn-primary'>{loading ? "Loading..":"login"}</button>
          <p className='text-sm'>Don't have an account? <Link to='/register' className='font-bold'>Sign Up</Link></p>
        </form>
      </div>
    </section>
  )
}
