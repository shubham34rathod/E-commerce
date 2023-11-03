import { useNavigate } from 'react-router-dom'
import '../css/editAddress.css'
import logo from '../images/shopping_logo-removebg-preview.png'

function ForgotPassword() {
    
    let navigate=useNavigate()

    return <>
        <div className="login_container">
            <div className="site_logo">
                <img src={logo} alt="" />
            </div>
            <h5>Enter email to reset password</h5>
            <form onSubmit={(e) => {  }}>
                <div>
                    <label htmlFor="email">Email Address</label><br />
                    <input type="email" id="email"  required />
                </div>
                {/* <div>
                    <label htmlFor="password">Password</label><span>Forgot Password</span><br />
                    <input type="password" id='password'  required />
                </div> */}
                <button>Login</button>
            </form>
            <p id="create_opt">Not a member? <b onClick={() => navigate('/sign-up')}>Create an Account</b></p>
        </div>
    </>
}

export default ForgotPassword