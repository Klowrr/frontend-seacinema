import { Navigate, Outlet } from "react-router-dom";
import React from 'react'
import { useAuth } from "../context/auth-context";
export default function ProtectedRoute({ children }) {
  const { isAuthenticated,loading } = useAuth()
  if (!isAuthenticated && !loading){
    return <Navigate to="/login" />
  }
  return children ? children : <Outlet />;

}
