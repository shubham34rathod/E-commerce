import '../css/resetPassword.css'

import { useNavigate } from 'react-router-dom'
// import '../css/editAddress.css'
import logo from '../images/shopping_logo-removebg-preview.png'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

function ResetPassword() {
    
    let navigate=useNavigate()
    let userEmail=useSelector((state)=>state.products.resetUserId)
    console.log(userEmail);

    let [newPassword,setNewPassword]=useState('')
    let [cnfPassword,setCnfPassword]=useState('')
    let [passAlert,setPassAlert]=useState(false)

    async function handleForgot(e)
    {
        e.preventDefault()
        console.log('forgot');
        if(newPassword==cnfPassword)
        {
            setPassAlert(false)
            await axios.post(`https://e-commerce-backend-tdjw.onrender.com/reset-password/new-password/${userEmail}`,{password:newPassword})
            .then((res)=>{
                console.log(res.data);
            })
            .catch((error)=>console.log(error))
        }
        else
        {
            setPassAlert(true)
        }
    }

    return <>
        <div className="login_container">
            <div className="site_logo">
                <img src={logo} alt="" />
            </div>
            <h5>Enter email to reset password</h5>
            <form onSubmit={(e) => {handleForgot(e)}}>
                <div>
                    <label htmlFor="password">New Password</label><br />
                    <input type="password" id="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}  required />
                </div>
                <div>
                    <label htmlFor="cnfPassword">Confirm Password</label><br />
                    <input type="password" id="cnfPassword" value={cnfPassword} onChange={(e)=>setCnfPassword(e.target.value)}  required />
                </div>
                {passAlert && <p style={{fontSize:'14px', color:'red'}}>Password doesn't match</p>}
                {/* <div>
                    <label htmlFor="password">Password</label><span>Forgot Password</span><br />
                    <input type="password" id='password'  required />
                </div> */}
                <button disabled={false}>Reset Password</button>
            </form>
            <p id="create_opt" style={{marginLeft:'45%'}}>click to <b onClick={() => navigate('/login')}>Login</b></p>
        </div>
    </>
}

export default ResetPassword
