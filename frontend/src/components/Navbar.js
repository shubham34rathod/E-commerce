import { useState } from 'react'
import '../css/navbar.css'
import shop_logo from '../images/shopping_logo.jpg'
import user from '../images/user_pic.webp'

function Navbar() {

    let [userPopup, setUserpopup] = useState(false)

    function handlePopup() {
        if (userPopup == false) {
            setUserpopup(true)
        }
        else {
            setUserpopup(false)
        }
    }

    return <>
        <div className="navbar">
            <div className="nav_box1">
                <img src={shop_logo} alt="" />
                <p>Dashboard</p>
                <p>Team</p>
            </div>
            <div className="nav_box2">
                <i class="bi bi-cart"></i>
                <span>15</span>
                <div className="nav_user_pic" onClick={handlePopup}>
                    <img src={user} alt="" />
                </div>
                {userPopup &&
                    <div className="nav_user_opt">
                        <p>My Profile</p>
                        <p>Settings</p>
                        <p>Sign out</p>
                    </div>
                }
            </div>
        </div>
    </>
}

export default Navbar