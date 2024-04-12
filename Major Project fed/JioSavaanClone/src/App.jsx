import { useEffect, useState } from 'react'
import LoginSavaan from './components/login.savaan'
import './App.css'
import './components/loginSign.css'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css' 

function App() {
  const [count, setCount] = useState("user")

  return (
    <>
      <Outlet />
      <LoginSavaan />
      <ToastContainer /> {/* Render ToastContainer component */}
    </>
  )
}

export default App
