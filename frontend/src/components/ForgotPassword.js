import { useNavigate } from 'react-router-dom'
// import '../css/editAddress.css'
import '../css/forgotPassword.css'
import logo from '../images/shopping_logo-removebg-preview.png'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setResetPassEmail } from './store/productSlice'

function ForgotPassword() {
    
    let navigate=useNavigate()
    let dispatch=useDispatch()

    let [email,setEmail]=useState('')
    let [checkEmail,setCheckEmail]=useState(false)
    let [checkEmail_2,setCheckEmail_2]=useState(false)

    async function handleForgot(e)
    {
        e.preventDefault()

        await axios.post(`https://e-commerce-backend-tdjw.onrender.com/reset-password/check_user`,{email:email})
        .then(async(res)=>{
            console.log(res.data);
            if(res.data==='user exist')
            {
                setCheckEmail(true)
                setCheckEmail_2(false)
                dispatch(setResetPassEmail(email))
                await axios.post(`http://localhost:8000/mail`,{to:email})
                .then((res)=>{
                    console.log(res.data);
                })
                .catch((error)=>console.log(error))
            }
            if(res.data==='invalid credentials')
            {
                setCheckEmail_2(true)
            }
        })
        .catch((error)=>console.log(error))
    }

    return <>
        <div className="login_container">
            <div className="site_logo">
                <img src={logo} alt="" />
            </div>
            <h5>Enter email to reset password</h5>
            <form onSubmit={(e) => { handleForgot(e) }}>
                <div>
                    <label htmlFor="email">Email Address</label><br />
                    <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}  required />
                </div>
                {(checkEmail) && <p className='forgot_check'>Check Email</p>}                
                {(checkEmail_2) && <p className='forgot_check_2'>Invalid Credentials</p>}                
                {/* <div>
                    <label htmlFor="password">Password</label><span>Forgot Password</span><br />
                    <input type="password" id='password'  required />
                </div> */}
                <button disabled={false}>Login</button>
            </form>
            <p id="create_opt">Not a member? <b onClick={() => navigate('/sign-up')}>Create an Account</b></p>
        </div>
    </>
}

export default ForgotPassword
