/* eslint-disable no-unused-vars */
import './App.css'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import Home from './Components/Home'
import Category from './Components/Category'
import Employee from './Components/Employee'
import Profile from './Components/Profile'
import Addcategory from './Components/Addcategory'
import Addemployee from './Components/Addemployee'
import EditEmployee from './Components/EditEmployee'
import Start from './Components/Start'
import EmployeeLogin from './Components/EmployeeLogin'
import EmployeeDetail from './Components/EmployeeDetail'
import { useEffect } from 'react'
import axios from 'axios'
import PrivateRoute from './Components/PrivateRoute'




function App() {
  
 
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start/>}></Route>

      <Route path='/adminlogin' element={ <Login/>}/>
      <Route path='/employee_login' element={ <EmployeeLogin/>}/>


      <Route path='/dashboard' element={
        <PrivateRoute>
           <Dashboard/>
        </PrivateRoute>
       
        
        }>
      
      <Route path='' element={<Home />} ></Route>
      <Route path='/dashboard/category' element={<Category />} ></Route>
      <Route path='/dashboard/employee' element={<Employee />} ></Route>
      <Route path='/dashboard/profile' element={<Profile/>} ></Route>
      <Route path='/dashboard/add_category' element={<Addcategory/>} ></Route>
      <Route path='/dashboard/add_employee' element={<Addemployee/>} ></Route>
      <Route path='/dashboard/edit_employee/:id' element={<EditEmployee/>} ></Route>
  
      </Route>

      <Route path='/employee_detail/:id' element={
        <PrivateRoute>

        <EmployeeDetail/>
        </PrivateRoute>
        } ></Route>



    </Routes>
     
    </BrowserRouter>
  )
}

export default App
