/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import '../Components/Category.css'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Category = () => {
  useEffect(()=>{
    axios.get('http://localhost:3000/auth/category')
    .then(result=>{
      
    })
  },[])
  return (<>
    <div className='cat'>
      <h3>
        Category List
      </h3>
      <Link to="/dashboard/add_category" className='btn btn-success'>Add Category</Link>

      {/* we will create a table for category list */}
       
       <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
       </div>


    </div>
    
    </>
  )
}

export default Category
