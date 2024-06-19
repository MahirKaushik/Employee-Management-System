/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

const Addemployee = () => {
    const [employee, setEmployee] = useState([])

  return (
       
      <div>
        <form >
            <label htmlFor="employee">Name of Employee</label>
            <input type="text" id='employee'/>
            












            <button className='btn btn-success btn-sm'>Add Employee</button>
        </form>
      </div>
    
    
  )
}

export default Addemployee
