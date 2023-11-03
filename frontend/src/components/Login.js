import { useNavigate } from 'react-router-dom'
import '../css/login.css'
import logo from '../images/shopping_logo-removebg-preview.png'
import { useState } from 'react'

function Login() {

    let navigate=useNavigate()
    let [loginData,setLoginData]=useState({
        email:'',
        password:''
    })

    function handleLoginData(e,prop)
    {
        setLoginData((data)=>({
            ...data,
            [prop]:e.target.value
        }))
    }

    async function handleSubmit(e)
    {
        e.preventDefault()
        await fetch(`http://localhost:8000/user/login`,{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(loginData)
        })
        .then((data)=>data.json())
        .catch((res)=>{
            console.log(res);
        })
    }

    return <>
        <div className="login_container">
            <div className="site_logo">
                <img src={logo} alt="" />
            </div>
            <h5>Log in to your account</h5>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <div>
                    <label htmlFor="email">Email Address</label><br />
                    <input type="email"  id="email" value={loginData.email} onChange={(e)=>handleLoginData(e,'email')} required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label><span>Forgot Password</span><br />
                    <input type="password" id='password' value={loginData.password} onChange={(e)=>handleLoginData(e,'password')} required/>
                </div>
                <button>Login</button>
            </form>
            <p id="create_opt">Not a member? <b onClick={()=>navigate('/sign_up')}>Create an Account</b></p>
        </div>
    </>
}

export default Login