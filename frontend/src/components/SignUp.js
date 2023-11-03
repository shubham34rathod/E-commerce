import { useNavigate } from 'react-router-dom'
import '../css/signUp.css'
import logo from '../images/shopping_logo-removebg-preview.png'
import { useState } from 'react'

function SignUp()
{
    let navigate=useNavigate()
    let [signUpdata,setSignupData]=useState({
        email:'',
        password:''
    })
    let [cnfPassword,setCnfPassword]=useState('')

    function handleSignupData(e,prop)
    {
        setSignupData((data)=>({
            ...data,
            [prop]:e.target.value
        }))
    }

    return <>
        <div className="login_container">
            <div className="site_logo">
                <img src={logo} alt="" />
            </div>
            <h5>Log in to your account</h5>
            <form>
                <div>
                    <label htmlFor="email">Email Address</label><br />
                    <input type="email" id="email" onChange={(e)=>handleSignupData(e,'email')} required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label><span>Forgot Password</span><br />
                    <input type="password" id='password' onChange={(e)=>handleSignupData(e,'password')} required/>
                </div>
                <div>
                    <label htmlFor="password">Confirm Password</label><br />
                    <input type="password" id='password' onChange={(e)=>setCnfPassword(e.target.value)} required/>
                </div>
                <button>Login</button>
            </form>
            <p id="create_opt">Already a member? <b onClick={()=>navigate('/login')}>Log In</b></p>
        </div>
    </>
}

export default SignUp