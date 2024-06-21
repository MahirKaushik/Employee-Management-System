/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'




const Home = () => {

  const [adminTotal, setAdminTotal] = useState(0)
  const [employeeTotal, setEmployeeTotal] = useState(0)
  const [salaryTotal, setSalaryTotal] = useState(0)
  const [admins,setAdmins] =useState([])

  
  useEffect(()=>{
    adminCount();
    employeeCount();
    salaryCount();
    AdminRecords();
  },[])

  const AdminRecords=()=>{
    axios.get('http://localhost:3000/auth/admin_records')
    .then(result =>{
      if(result.data.Status){
        setAdmins(result.data.Result)
      }
    })
  }


  const adminCount =()=>{
    axios.get('http://localhost:3000/auth/admin_count')
    .then(result =>{
      if(result.data.Status){
        setAdminTotal(result.data.Result[0].admin)
      }
    })
  }

  const employeeCount =()=>{
    axios.get('http://localhost:3000/auth/employee_count')
    .then(result =>{
      if(result.data.Status){
        setEmployeeTotal(result.data.Result[0].employee)
      }
    })
  }

  const salaryCount =()=>{
    axios.get('http://localhost:3000/auth/salary_count')
    .then(result =>{
      if(result.data.Status){
        setSalaryTotal(result.data.Result[0].salaryOFEmp)
      }
    })
  }


  return (
    <div>
      <div className="home">
        <div className="card-home">
          <h4>Admin</h4>
          <div className="line"></div>
          <h5>Total: {adminTotal}</h5>
       </div>
        <div className="card-home">
          <h4>Employee</h4>
          <div className="line"></div>
          <h5>Total: {employeeTotal}</h5>
        </div>
        <div className="card-home">
          <h4>Salary</h4>
          <div className="line"></div>
          <h5>Total: $ {salaryTotal}</h5>
        </div>
      </div>

      <div className="m-5">
        <h3>List of Admins</h3>
        <table className='emp-table1'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              admins.map(a =>(
                <tr>
                  <td>{a.email}</td>
                  <td>
                  <button
                    className=" btn btn-info m-1"
                  >
                    Edit
                  </button>
                  <button
                    className=" btn btn-danger m-1"
                  >
                    Delete
                  </button>
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

export default Home
