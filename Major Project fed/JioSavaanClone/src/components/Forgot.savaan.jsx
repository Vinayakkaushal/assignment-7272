import { useState } from "react"
import img1 from "../assets/Nucleya.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import logo from "../assets/logo.png"
import SignUp from "./signUp.login"
import Login from "./login"
import { NavLink } from "react-router-dom"
import Forge from "./Forget"

const img = [img1, img2, img3, img4, img5]
const bgC = ["#2c3e50", "#34495e", "#7f8c8d", "#2c3e50", "#8e44ad"];
function Forgot (){
  const [flag, setFlag] = useState(false)
  
  return (
    <div  class ="mainContainerLogin"
    >
        <div class="imgsrlogin" style={{ backgroundColor: bgC[Math.floor(Math.random() * 5)] }}>
        <NavLink to={"/"}>
              <img src={logo} alt="" width={150} className='absolute top-0 left-0 mt-[-40px]'/>
            </NavLink> 
            <div className="imgHolder">
            <img src={img[Math.floor(Math.random() * 5)]} alt="" className="imag"/>
            <div className="innerTxt"> 
              <p className="text-4xl text-white font-semibold py-0.5">All Your Music.</p>
              <p className="text-2xl ">Anytime, anywhere.</p>
            </div>
            </div>
        </div>
        <div class="loginInfo">
            <div class="logSign">
            <NavLink to="/login">
              <button class="logSignbut">Login</button>
              </NavLink>
              <pre> </pre>
              <NavLink to="/signup">
              <button class="logSignbut">Sign Up</button>
              </NavLink>
            </div>
            <div class ="logContainer">
              <div class ="welcome">
                <h1 className="px-9 py-2 text-4xl font-bold">Forgot Your Password?</h1>
                            
              </div>
              <Forge/>
            </div>
        </div>
    </div>
  )
}
export default Forgot