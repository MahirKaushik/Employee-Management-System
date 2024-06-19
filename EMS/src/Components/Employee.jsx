/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../Components/Employee.css'

const Employee = () => {
  const [employee, setEmployee] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/auth/employee')
      .then(result => {
        if (result.data.Status) {
          setEmployee(result.data.Result)

        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))
  }, [])


  return (
    <div className='m-3'>
      <div className='cat'>
        <h3>
          Employee List
        </h3>
        <Link to="/dashboard/add_employee" className='btn btn-success'>Add Employee</Link>
      </div>

      {/* we will create a table for category list */}

      <div>
        <table className='emp-table1'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employee.map(e => (
                <tr>
                  <td>{e.name}</td>
                  <td><img src={`http://localhost:3000/Images/` + e.image} /></td>
                  <td>{e.email}</td>
                  <td>{e.address}</td>
                  <td>{e.salary}</td>
                  <td>
                    <Link to={`/dashboard/edit_employee/`+e.id} className=' btn btn-info m-1'>Edit</Link>
                    <button className=' btn btn-danger m-1'>Delete</button>
                  </td>
                </tr>
              ))

            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employee
