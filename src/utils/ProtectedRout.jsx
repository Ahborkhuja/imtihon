import React from 'react'
import { Navigate, useLocation } from "react-router-dom"

const ProtectedRout = ({ children }) => {
  let isLoggedin = localStorage.getItem('isLoggedin');
  if (!isLoggedin) {
    return <Navigate to="/login" replace />
  } else {
    return children
  }
};

export default ProtectedRout