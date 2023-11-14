import { useNavigate } from 'react-router-dom'
import '../css/signUp.css'
import logo from '../images/shopping_logo-removebg-preview.png'
import { useState } from 'react'

function SignUp() {
    let navigate = useNavigate()
    let [signUpdata, setSignupData] = useState({
        name: '',
        email: '',
        password: ''
    })
    let [cnfPassword, setCnfPassword] = useState('')

    function handleSignupData(e, prop) {
        setSignupData((data) => ({
            ...data,
            [prop]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        // console.log(signUpdata);
        await fetch(`https://e-commerce-backend-tdjw.onrender.com/user/newUser`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(signUpdata)
        })
        .then((data) => data.json())
        .then((res)=>{
            console.log(res);
            if(res==='user created')
            {
                setSignupData({
                    name: '',
                    email: '',
                    password: ''
                })
                navigate('/login')
            }
        })
        .catch((error)=>console.log(error))
    }

    return <>
        <div className="login_container">
            <div className="site_logo">
                <img src={logo} alt="" />
            </div>
            <h5>Log in to your account</h5>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="text">Full Name</label><br />
                    <input type="text" id="text" value={signUpdata.name} onChange={(e) => handleSignupData(e, 'name')} required />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label><br />
                    <input type="email" id="email" value={signUpdata.email} onChange={(e) => handleSignupData(e, 'email')} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label><span>Forgot Password</span><br />
                    <input type="password" id='password' value={signUpdata.password} onChange={(e) => handleSignupData(e, 'password')} required />
                </div>
                <div>
                    <label htmlFor="password">Confirm Password</label><br />
                    <input type="password" id='password' value={cnfPassword} onChange={(e) => setCnfPassword(e.target.value)} required />
                </div>
                <button>Create Account</button>
            </form>
            <p id="create_opt">Already a member? <b onClick={() => navigate('/login')}>Log In</b></p>
        </div>
    </>
}

export default SignUp
