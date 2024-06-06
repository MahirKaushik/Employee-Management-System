import './App.css'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/adminlogin' element={ <Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
