/* eslint-disable no-unused-vars */
import React from 'react'
import '../Components/Category.css'
import {Link} from 'react-router-dom'
const Category = () => {
  return (
    <div className='cat'>
      <h3>
        Catgeory List
      </h3>
      <Link to="/dashboard/add_category">Add Category</Link>
    </div>
  )
}

export default Category
