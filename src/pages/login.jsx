import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    axios.post("/login", {
      username: username,
      password: password,
    }).then((res) => {
      localStorage.setItem("SEACINEMA_TOKEN", res.data.accessToken);
      toast("Login Success")
      navigate("/");
    }).catch((err) => {
      toast.error(err.response.data.message)
    }).finally(()=>{
      setLoading(false)
      window.location.reload()
    })
  }
  return (
    <section className='grid lg:grid-cols-2 min-h-screen bg-gray-200 px-5 md:px-0 md:gap-5'>
      <div className='order-2 overflow-hidden h-screen hidden lg:block  w-full'>
        <img src="/assets/movieposter.jpg" alt='movie_poster' className='w-full h-full object-top object-cover'/>
      </div>
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
