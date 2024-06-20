/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

const EditEmployee = () => {

  const {id} =useParams()

  const [employee,setEmployee] =useState({
    name:'',
    email:'',
    salary:'',
    address:'',
    category_id:'',
  })

  const [category, setCategory] = useState([])
  const navigate =useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3000/auth/category')
      .then(result => {
        if (result.data.Status) {
          setCategory(result.data.Result)

        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))

      axios.get('http://localhost:3000/auth/employee/'+id)
      .then(result =>{
        // console.log(result.data)
        setEmployee({
          ...employee,
          name: result.data.Result[0].name,
          email: result.data.Result[0].email,
          address: result.data.Result[0].address,
          salary: result.data.Result[0].salary,
          category_id: result.data.Result[0].category_id,
        })
      }).catch(err=>console.log(err))
  }, [])

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.put('http://localhost:3000/auth/edit_employee/'+id, employee)
    .then(result =>{
      if(result.data.Status){
        navigate('/dashboard/employee')
      }else{
        alert(result.data.Error)
      }
    }).catch(err=>console.log(err))
  }

  return (
    <div>
       <div className='emp-b mt-5'>
        <form className='emp' onSubmit={handleSubmit}>
            <h3>Edit Employee</h3>


            <label htmlFor="employee">Name</label>
            <input type="text" id='name' value={employee.name} placeholder='Name' onChange={(e)=>setEmployee({...employee, name:e.target.value})}/>


            <label htmlFor="email">E-Mail</label>
            <input type="email"  id="email" value={employee.email} placeholder='Email' onChange={(e)=>setEmployee({...employee, email:e.target.value})} />


            <label htmlFor="salary">Salary</label>
            <input type="number"  id="salary" value={employee.salary} placeholder='Salary' onChange={(e)=>setEmployee({...employee, salary:e.target.value})} />


            <label htmlFor="address">Address</label>
            <input type="text"  id="address" value={employee.address} placeholder='Address' onChange={(e)=>setEmployee({...employee, address:e.target.value})}/>


            <label htmlFor="category">Category</label>
            <select id="category" onChange={(e)=>setEmployee({...employee, category_id:e.target.value})}>
              {
                category.map(c=>{
                  return <option value={c.id}>{c.name}</option>
                })
              }
            </select>


            <button className='btn btn-primary btn-sm'>Edit Employee</button>
        
        </form>
      </div>
    </div>
  )
}

export default EditEmployee
