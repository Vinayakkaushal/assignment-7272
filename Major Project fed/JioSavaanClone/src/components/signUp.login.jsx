import React, { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' 


function SignUp() {
    const [password , setPassword] = useState("")
    const [email , setEmail] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")

    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm
    // const notifyA =()=> toast.error('Account created successfully',
    // {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    // }
    // )


    const postData = ()=>{
        //sending data to backend
        if(!emailRegex.test(email)){
            return;
        }
        fetch("http://localhost:5000/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password,
                confirmPassword:confirmPassword
            })
        }).then(res=>res.json()).then(data=>{
            // notifyA();
            console.log(data)})

    }

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
            <p className="msg">Sign up with your email address.</p>
            <div className="input">
                <input type="text" placeholder={flag1 ? "" : 'Email'}
                onClick={() => setFlag1(!flag1)}
                className="inputBox" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input">
                <input type="text" placeholder={flag2 ? "" : 'Password'}
                onClick={() => setFlag2(!flag2)}
                className="inputBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input">
                <input type="text"  placeholder={flag3 ? "" : 'Confirm Password'}
                onClick={() => setFlag3(!flag3)}
                className="inputBox"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <div className="input">
                <button className="cont"
                onClick={()=>postData()}
                >Continue</button>
                
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
        <p className="msg">Sign up with your mobile number.</p>
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

export default SignUp