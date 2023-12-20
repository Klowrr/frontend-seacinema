import { Navigate, Outlet } from "react-router-dom";
import React from 'react'
import { useAuth } from "../context/auth-context";
export default function ProtectedRoute({children}) {
  const { isAuthenticated} = useAuth();
  if (!isAuthenticated){
    return <Navigate to="/login" />
  }
  return children ? children : <Outlet />;

}
