import '../../css/userProfile.css'
import Navbar from '../Navbar'
import tmpImg from '../../images/user_pic.webp'
import EditAddress from './EditAddress'
import { useState } from 'react'

function UserProfile() {

    let [popup, setPopup] = useState(false)

    return <>
        <Navbar></Navbar>
        <h3 id='profile_title'>My profiles :</h3>
        <div className="profile_container" style={{filter:(popup)? 'blur(3px)':'blur(0px)'}}>
            <h5 className='profile_no'>Name:User name</h5>
            <p className='profile_status'>email:abc@gmail.com</p>
            <div className="profile_box1">
                <div className="profile_sub1 ">
                    <div className="profile_sub2">
                        <img src={tmpImg} alt="" />
                    </div>
                    <div className="profile_sub3">
                        <p className='profile_item_name'>User name<br />
                            <span className='profile_brand_name'>India</span>
                        </p>
                        {/* <p className='profile_qty'>Qty:2</p> */}
                    </div>
                </div>
                {/* <p>$899</p> */}
            </div>
            <hr />
            {/* <div className="profile_box2">
                <p><b>Subtotal</b> <span>$1798 </span></p>
                <p><b>Total Items in Cart</b> <span>2 items </span></p>
            </div> */}
            <button className='user_add_addressBtn'>Add Address</button>
            <p id='profile_address'>Your Address:</p>
            <div className="profile_box3">
                <div className="profile_sub4">
                    <h6>Abhishek R</h6>
                    <p>address Lorem ipsum dolor sit.</p>
                    <p>415010</p>
                </div>
                <div className="profile_sub5">
                    <p>Phone:7894561231</p>
                    Banglore
                </div>
                <div className="profile_sub5">
                    <p> <i class="bi bi-pencil-square" onClick={()=>setPopup(true)}></i><br /></p>
                    <i class="bi bi-trash"></i>
                </div>
            </div>
        </div>
        
        {/* used same component for add new address */}

        {popup &&
            <div className="address_edit_box">
                <p><i class="bi bi-x-square"></i></p>
                <EditAddress popFunction={setPopup}></EditAddress>
            </div>
        }
    </>
}

export default UserProfile