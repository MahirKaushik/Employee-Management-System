/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Category = () => {
  const [category, setCategory] = useState([])



  useEffect(() => {
    axios.get('http://localhost:3000/auth/category')
      .then(result => {
        if (result.data.Status) {
          console.log(result.data.Result)
          setCategory(result.data.Result)

        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))
  }, [])
  return (
    <>
      <div className='cat'>
        <h3>
          Category List
        </h3>
        <Link to="/dashboard/add_category" className='btn btn-success'>Add Category</Link>


        {/* we will create a table for category list */}

        <div className='table1'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {
                category.map(c => (
                  <tr>
                    <td>{c.name}</td>
                  </tr>
                ))

              }
            </tbody>
          </table>
        </div>


      </div>

    </>
  )
}

export default Category
