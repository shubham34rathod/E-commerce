import '../css/signUp.css'
import logo from '../images/shopping_logo-removebg-preview.png'

function SignUp()
{
    return <>
        <div className="login_container">
            <div className="site_logo">
                <img src={logo} alt="" />
            </div>
            <h5>Log in to your account</h5>
            <form>
                <div>
                    <label htmlFor="email">Email Address</label><br />
                    <input type="email" id="email" required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label><span>Forgot Password</span><br />
                    <input type="password" id='password' />
                </div>
                <div>
                    <label htmlFor="password">Confirm Password</label><br />
                    <input type="password" id='password' />
                </div>
                <button>Login</button>
            </form>
            <p id="create_opt">Already a member? <b>Log In</b></p>
        </div>
    </>
}

export default SignUp