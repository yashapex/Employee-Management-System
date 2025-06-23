import React,{useContext, useEffect, useState} from 'react'
import Login from './components/Auth/Login';
import { setLocalStorage } from './utils/localStorage';
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider';



const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null)

  const [userData,SetUserData] = useContext(AuthContext)


  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role)
      setloggedInUserData(userData.data)

    }
  }, [])
  
  

  const handleLogin = (email,password) =>{
    if(email == "admin@me.com" && password === "123"){
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee = userData.find((e) => email === e.email && e.password === password)
      if(employee){
      setUser('employee')
      setloggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
      }else{
      alert("Invalid Credentials")
    }
  }
  }


  return (
    <>
    {!user ? <Login handlelogin = {handleLogin}/>: ''}
    {user == 'admin' ? <AdminDashboard changeUser = {setUser}/> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser = {setUser}/> : null)}
    
    </>
  )
}

export default App;
