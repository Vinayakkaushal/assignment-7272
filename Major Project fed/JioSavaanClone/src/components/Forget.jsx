import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
function Forge() {
    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)
    const [flag3, setFlag3] = useState(false)
    const [way , setway] = useState("email")

  return (
    <div className="container">
        <div className="header">
        
        </div>
        <div className="inputs">
            <div  className='msgBox'>
            <p className="msg">Enter the email address you used when you signed up and we'll help you out.
</p></div>
            <div className="input">
                <input type="text" placeholder={flag1 ? "" : 'Email'}
                onClick={() => setFlag1(!flag1)}
                className="inputBox" 
                />
            </div>
            <div className="input">
                <button className="cont">Send Remineder</button>
            </div>
            
        </div>
    </div>

  )}
export default Forge