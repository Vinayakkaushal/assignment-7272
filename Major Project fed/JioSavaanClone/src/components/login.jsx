import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { NavLink } from 'react-router-dom'
function Login() {
    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)
    const [flag3, setFlag3] = useState(false)
    const [way , setway] = useState("email")

    if(way==="email"){
  return (
    <div className="container">
        <div className="header">
        
        </div>
        <div className="inputs">
            <p className="msg">Log in or sign up with your mobile number.</p>
            <div className="input">
                <input type="text" placeholder={flag1 ? "" : 'Email'}
                onClick={() => setFlag1(!flag1)}
                className="inputBox" 
                />
            </div>
            <div className="input">
                <input type="text" placeholder={flag2 ? "" : 'Password'}
                onClick={() => setFlag2(!flag2)}
                className="inputBox" />
            </div>
            
            <div className="input">
                <NavLink to="/forgotpassword">
                <button className='forgot'>Forgot Password</button>
                </NavLink>
                
            </div>
            <div className="input">
                <button className="cont">Continue</button>
                
                <p className='infor'>By selecting ‘Continue’, you agree to JioSaavn’s Terms of Service and Privacy Policy.</p>
                <div className="wayChange">
                    <button className='change' onClick={() => setway("mobile")}>Mobile</button>
                    
                    <button className='change'onClick={() => setway("email")}>Email</button>
                </div>
            </div>
            
        </div>
    </div>
  )}
  else{
    return(
        <div className="container">
        <div className="header">
            
        </div>
        <div className="inputs">
        <p className="msg">Log in or sign up with your mobile number.</p>
            <div className="input">
                <PhoneInput  country={'in'}  inputprops={{
                    required : true
                }} placeholder={flag1 ? "" : 'Mobile Number'}
                onClick={() => setFlag1(!flag1)}
                className="inputBox" 
                />
            </div>
            
            <div className="input">
                <button className="cont">Continue</button>
                
                <p className='infor'>Select ‘Continue’ to give consent to JioSaavn’s Terms of Service and acknowledge that you have read and understood the Privacy Policy. An SMS may be sent to authenticate your account, and message and data rates may apply.</p>
                <div className="wayChange">
                    <button className='change' onClick={() => setway("mobile")}>Mobile</button>
                    
                    <button className='change' onClick={() => setway("email")}>Email</button>
                </div>
            </div>
            
        </div>
    </div>
    )
  }
}
export default Login