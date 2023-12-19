import React,{ createContext, useContext, useEffect, useState } from 'react'
import axios from '../api/axios'
export const AuthContext = createContext()

export function AuthContextProvider({children}) {
  const [user, setUser] = useState({logged:false})
  const [loading, setLoading] = useState(true)
  const getToken = localStorage.getItem('SEACINEMA_TOKEN')
  useEffect(() => {
    if(getToken) {
      setLoading(true)
      axios.get('/me')
      .then((res)=>{
        setUser({
          logged:true, 
          role:res.data.role, 
          name:res.data.name, 
          age:res.data.age, 
          username:res.data.username,
          balance:res.data.balance
        })
      })
      .catch((err)=>{
        console.log(err)
        setUser({logged:false})
      })
      .finally(()=>{
        setLoading(false)
      })
    }else{
      setLoading(false)
    }
  },[getToken])

  const signOut = () => {
    localStorage.removeItem('SEACINEMA_TOKEN')
    setUser({logged:false})
    window.location.reload()
  }

  const value = {user,signOut,loading}
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}