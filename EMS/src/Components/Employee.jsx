/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Employee = () => {
  return (
    <div className='m-3'>
       <div className='cat'>
      <h3>
        Employee List
      </h3>
      <Link to="/dashboard/add_employee" className='btn btn-success'>Add Employee</Link>
      </div>
    </div>
  )
}

export default Employee
