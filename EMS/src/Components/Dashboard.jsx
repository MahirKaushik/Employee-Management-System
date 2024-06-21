/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {

  const navigate=useNavigate();
  axios.defaults.withCredentials =true;

  const handleLogout=()=>{
    axios.get('http://localhost:3000/auth/logout')
    .then(result =>{
      if(result.data.Status){
        localStorage.removeItem("valid" )
        navigate('/')
      }
    })
  }
  return (
    <>
    <div className='whole'>
      
      <div className='aside'>
        <div>EMS</div>
        <ul>
          <Link to="/dashboard">
          <li><span className="material-icons">dashboard</span>Dashboard</li>
          </Link>
          <Link to="/dashboard/employee">
          <li><span className="material-icons">groups</span>Manage Employees</li>
          </Link>
          <Link to="/dashboard/category">
          <li><span className="material-icons">category</span>Category</li>
          </Link>
          {/* <Link to="/dashboard/profile">
          <li><span className="material-icons">account_circle</span>Profile</li>
          </Link> */}
          <Link onClick={handleLogout}>
          <li><span className="material-icons">logout</span>Logout</li>
          </Link>  
        </ul>
      </div>

      <div>
        <div className='navi'> Employee Management System</div>
        <Outlet />
      </div>

    </div>
    </>
  )
}

export default Dashboard
