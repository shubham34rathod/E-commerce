import { useState } from 'react'
import '../css/navbar.css'
import shop_logo from '../images/shopping_logo.jpg'
import user from '../images/user_pic.webp'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, logOutUser } from './store/productSlice'

function Navbar() {

    let navigate = useNavigate()
    let cartCount = useSelector((state) => state.products.totalCartItems)
    let dispatch = useDispatch()
    let userInfo = useSelector((state) => state.products.login)
    let userRole = useSelector((state) => state.products.userData)

    let [userPopup, setUserpopup] = useState(false)

    function handlePopup() {
        if (userPopup == false) {
            setUserpopup(true)
        }
        else {
            setUserpopup(false)
        }
    }

    function handleLogout() {
        console.log('out');
        dispatch(logOutUser())
        navigate('/login')
    }

    return <>
        <div className="navbar">
            <div className="nav_box1">
                <img src={shop_logo} alt="" onClick={() => navigate('/')} />
                {(userRole.role === 'user') ?
                    <>
                        <p>Dashboard</p>
                        <p>Team</p>
                    </>
                    :
                    <>
                        <p>
                            Admin
                        </p>
                        <p onClick={()=>navigate('/adminOrders')}>
                            Orders
                        </p>
                    </>
                }
            </div>
            {(!userInfo) ?
                <>
                    <button className='nav_loginBtn' onClick={() => navigate('/login')}>Log In</button>
                </>
                :
                <div className="nav_box2">
                    <i class="bi bi-cart" onClick={() => navigate('/cart')}></i>
                    <span>{cartCount}</span>
                    <div className="nav_user_pic" onClick={handlePopup}>
                        <img src={user} alt="" />
                    </div>
                    {userPopup &&
                        <div className="nav_user_opt">
                            <p onClick={() => navigate('/user_profile')}>My Profile</p>
                            <p onClick={() => navigate('/my_order')}>My Orders</p>
                            <p onClick={handleLogout}>Sign out</p>
                        </div>
                    }
                </div>
            }
        </div>
    </>
}

export default Navbar