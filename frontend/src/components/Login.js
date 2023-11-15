import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import '../css/login.css'
import logo from '../images/shopping_logo-removebg-preview.png'
import { useState } from 'react'
import { setUser } from './store/productSlice'
import axios from 'axios'

function Login() {

    let dispatch = useDispatch()
    let navigate = useNavigate()
    let [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    let [loginLoading,setLoginLoading]=useState(false)

    function handleLoginData(e, prop) {
        setLoginData((data) => ({
            ...data,
            [prop]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await fetch(`http://localhost:8000/user/login`,{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(loginData),
        })
        .then((data)=>data.json())
        .then((res)=>{
            console.log(res);
            if(res==='wrong password')
            {

            }
            else
            {
                // dispatch(setUser(res))
                // setLoginData({
                //     email:'',
                //     password:''
                // })
                // navigate('/')
                dispatch(setUser(res))
                setLoginLoading(false)
                setLoginData({
                    email: '',
                    password: ''
                })
                if(res.role==='user')
                {
                    navigate('/')
                }
                if(res.role==='admin')
                {
                    navigate('/adminProductList')
                }
            }
        })
        .catch((error)=>console.log(error))
        setLoginLoading(true)

        // await axios.post(`https://e-commerce-backend-e13o.onrender.com/user/login`, loginData, { withCredentials: true })
        // await axios.post(`https://e-commerce-backend-e13o.onrender.com/user/login`, loginData)
        //     .then((res) => {
        //         console.log(res.data);
        //         if (res.data === 'wrong password') {

        //         }
        //         else {
        //             dispatch(setUser(res.data))
        //             setLoginLoading(false)
        //             setLoginData({
        //                 email: '',
        //                 password: ''
        //             })
        //             if(res.data.role==='user')
        //             {
        //                 navigate('/')
        //             }
        //             if(res.data.role==='admin')
        //             {
        //                 navigate('/adminProductList')
        //             }
        //         }
        //     })
    }

    return <>
        <div className="login_container">
            <div className="site_logo">
                <img src={logo} alt="" />
            </div>
            <h5>Log in to your account</h5>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div>
                    <label htmlFor="email">Email Address</label><br />
                    <input type="email" id="email" value={loginData.email} onChange={(e) => handleLoginData(e, 'email')} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label><span onClick={()=>navigate('/forgot_password')}>Forgot Password</span><br />
                    <input type="password" id='password' value={loginData.password} onChange={(e) => handleLoginData(e, 'password')} required />
                </div>
                <button>
                    {(loginLoading)?
                    <div class="spinner-border" role="status" style={{width:'20px',height:'20px'}}>
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    :
                    <p style={{paddingTop:'5px'}}>Login</p>
                    }
                </button>
                {/* <button>Login</button> */}
            </form>
            <p id="create_opt">Not a member? <b onClick={() => navigate('/sign_up')}>Create an Account</b></p>
        </div>
    </>
}

export default Login