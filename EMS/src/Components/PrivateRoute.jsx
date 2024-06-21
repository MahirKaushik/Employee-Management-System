/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  return localStorage.getItem("valid") ? children : <Navigate to="/"    />
}

export default PrivateRoute
