/* eslint-disable no-unused-vars */
import React from 'react'
import '../Components/Category.css'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';


const Addcategory = () => {

    const [category, setCategory] = useState()
    const navigate =useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        axios.post('http://localhost:3000/auth/add_category',{category})
        .then(result => {
          if(result.data.Status){
            navigate('/dashboard/category')
          }else{
            alert('invalid')
          }
        })
        .catch(err => console.log(err))
    }



  return (
    <div>
      <div className='acat'>
        <form className='acat-form' onSubmit={handleSubmit}>
            <label htmlFor="Category">Name of Category</label>
            <input type="text" id='Category' onChange={(e)=>{
                setCategory(e.target.value)
            }} />
            <button className='btn btn-success btn-sm'>Add Category</button>
        </form>
      </div>
    </div>
  )
}

export default Addcategory
