/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Addemployee = () => {

    const [employee,setEmployee] =useState({
      name:'',
      email:'',
      password:'',
      salary:'',
      address:'',
      category_id:'',
      image:''
    })

    const [category, setCategory] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/auth/category')
      .then(result => {
        if (result.data.Status) {
          setCategory(result.data.Result)

        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))
  }, [])

  const navigate =useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('password', employee.password);
    formData.append('address', employee.address);
    formData.append('salary', employee.salary);
    formData.append('image', employee.image);
    formData.append('category_id', employee.category_id);

    axios.post('http://localhost:3000/auth/add_employee', formData)
    .then(result =>{
      if(result.data.Status){
        navigate('/dashboard/employee')
      }else{
        alert(result.data.Error)
      }
    })
    .catch(err => console.log(err))
  }



  return (
       
      <div className='emp-b mt-5'>
        <form className='emp' onSubmit={handleSubmit}>
            <h3>Add Employee</h3>


            <label htmlFor="employee">Name</label>
            <input type="text" id='name' placeholder='Name' onChange={(e)=>setEmployee({...employee, name:e.target.value})}/>


            <label htmlFor="email">E-Mail</label>
            <input type="email"  id="email" placeholder='Email' onChange={(e)=>setEmployee({...employee, email:e.target.value})} />


            <label htmlFor="password">Password</label>
            <input type="password" id="password"  placeholder='Password' onChange={(e)=>setEmployee({...employee, password:e.target.value})} />


            <label htmlFor="salary">Salary</label>
            <input type="number"  id="salary" placeholder='Salary' onChange={(e)=>setEmployee({...employee, salary:e.target.value})} />


            <label htmlFor="address">Address</label>
            <input type="text"  id="address" placeholder='Address' onChange={(e)=>setEmployee({...employee, address:e.target.value})}/>


            <label htmlFor="category">Category</label>
            <select id="category" onChange={(e)=>setEmployee({...employee, category_id:e.target.value})}>
              {
                category.map(c=>{
                  return <option value={c.id}>{c.name}</option>
                })
              }
            </select>


            <label htmlFor="myFile">Image</label>
            <input type="file" id="myFile" name="image" onChange={(e)=>setEmployee({...employee, image:e.target.files[0]})}></input>
            

            <button className='btn btn-primary btn-sm'>Add Employee</button>
        
        </form>
      </div>
    
    
  )
}

export default Addemployee
