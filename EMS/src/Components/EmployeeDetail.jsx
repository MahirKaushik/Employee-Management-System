/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const EmployeeDetail = () => {
    const navigate =useNavigate();
    // axios.defaults.withCredentials =true;
    
    const [employee,setEmployee]=useState([])
    const {id} = useParams()
    useEffect(()=>{
        axios.get('http://localhost:3000/employee/detail/'+id)
        .then(result=>{
            setEmployee(result.data[0])
        })
        .catch(err => console.log(err))
    },[])

    const handleLogout=()=>{
        axios.get('http://localhost:3000/employee/logout')
        .then(result =>{
          if(result.data.Status){
            localStorage.removeItem("valid")
            navigate('/')
          }
        })
      }

  return (
   <>
    <div>
        <div className='empnav'>Employee Management System</div>
      </div>
      <div className='empwhole' >
        <div className='empunder'>
            <div className="pfp">
                <img src={`http://localhost:3000/Images/`+ employee.image}  />
            </div>
            <div className="details">
                <h3>Name : {employee.name} </h3>  
                <h3>Email : {employee.email}</h3>  
                <h3>Salary : ${employee.salary}</h3>  
            </div>
            <div>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
        </div>
      </div>
   
   
   
   
   </>
  )
}

export default EmployeeDetail
