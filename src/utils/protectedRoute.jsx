import { Navigate, Outlet } from "react-router-dom";
import React from 'react'

export default function ProtectedRoute({user,children}) {
  if (!user.logged){
    return <Navigate to="/login" />
  }
  return children ? children : <Outlet />;

}
