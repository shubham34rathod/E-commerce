import '../css/navbar.css'
import shop_logo from '../images/shopping_logo.jpg'
import user from '../images/user_pic.webp'

function Navbar() {
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
                <div className="nav_user_pic">
                    <img src={user} alt="" />
                </div>
            </div>
        </div>
    </>
}

export default Navbar