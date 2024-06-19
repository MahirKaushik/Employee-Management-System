import './App.css'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Category from './Components/Category'
import Employee from './Components/Employee'
import Profile from './Components/Profile'
import Addcategory from './Components/Addcategory'
import Addemployee from './Components/Addemployee'
import EditEmployee from './Components/EditEmployee'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/adminlogin' element={ <Login/>}/>


      <Route path='/dashboard' element={<Dashboard/>}>
      
      <Route path='' element={<Home />} ></Route>
      <Route path='/dashboard/category' element={<Category />} ></Route>
      <Route path='/dashboard/employee' element={<Employee />} ></Route>
      <Route path='/dashboard/profile' element={<Profile/>} ></Route>
      <Route path='/dashboard/add_category' element={<Addcategory/>} ></Route>
      <Route path='/dashboard/add_employee' element={<Addemployee/>} ></Route>
      <Route path='/dashboard/edit_employee/:id' element={<EditEmployee/>} ></Route>
       

      </Route>



    </Routes>
     
    </BrowserRouter>
  )
}

export default App
