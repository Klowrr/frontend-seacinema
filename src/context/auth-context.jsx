import React,{ createContext, useContext, useState ,useEffect, useReducer } from 'react'
import axios from '../api/axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const ACTIONS = {
  INITIALIZE :'initialize',
  LOGIN: 'login',
  LOGOUT: 'logout',
  REGISTER: 'loading'
}

function reducer(state, action){
  switch (action.type) {
    case ACTIONS.INITIALIZE:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user
      }
    case ACTIONS.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      }
    case ACTIONS.REGISTER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      }
    case ACTIONS.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }      
    default:
      return state
  }
}


export const AuthContext = createContext()
const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
}
export function AuthContextProvider({children}) {
  const [loading, setLoading] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)
  const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('SEACINEMA_TOKEN')) {
      setLoading(true)
      axios.get('/me')
      .then((res)=>{
        dispatch({
          type: ACTIONS.INITIALIZE,
          payload: {
            isAuthenticated: true,
            user:res.data
          }
        });
      })
      .catch((err)=>{
        console.log(err)
        dispatch({
          type: ACTIONS.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user:null
          }
        });
      })
      .finally(()=>{
        setLoading(false)
      })
    }else{
      dispatch({
        type: ACTIONS.INITIALIZE,
        payload: {
          isAuthenticated: false,
          user:null
        }
      });
      setLoading(false)
    }
  },[])
  const login = (username , password) => {
    setLoading(true)
    axios.post("/login", {
      username: username,
      password: password,
    }).then((res) => {
      localStorage.setItem("SEACINEMA_TOKEN", res.data.accessToken);
      dispatch({
        type: ACTIONS.LOGIN,
        payload: {
          user:res.data.user
        }
      });
      navigate('/')
      toast.success("Login Success")
    }).catch((err) => {
      toast.error(err.response.data.message)
    }).finally(()=>{
      setLoading(false)
      window.location.reload()
    })
  }
  const register = (data) => {
    setLoading(true)
    axios
    .post("/register", data)
    .then((res)=>{
      toast.success("Success create account")
      navigate('/login')
    })
    .catch((err) => {
      toast.error(err.response.data.message)
    }).finally(()=>{
      setLoading(false)
    })
  }
  const signOut = () => {
    localStorage.removeItem('SEACINEMA_TOKEN')
    dispatch({type: ACTIONS.LOGOUT})
  }

  const value = {
    ...state,
    login,
    register,
    signOut,
    loading
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}