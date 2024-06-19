/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
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
          <Link to="/dashboard/profile">
          <li><span className="material-icons">account_circle</span>Profile</li>
          </Link>
          <Link>
          <li><span className="material-icons">logout</span>Logout</li>
          </Link>  
        </ul>
      </div>

      <div>
        <div className='navi'>Employee Management System</div>
        <Outlet />
      </div>

    </div>
    </>
  )
}

export default Dashboard
