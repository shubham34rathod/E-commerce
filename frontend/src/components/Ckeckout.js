import '../css/checkout.css'
import Navbar from './Navbar'
import tmpImg from '../images/shopping_logo.jpg'

function Checkout() {
    return <>
        <Navbar></Navbar>
        <div className="checkout_container">
            <div className="checkout_box1">
                <h4>Personal Information</h4>
                <p>User permanent address for better service</p>
                <form>
                    <div className="check_sub1">
                        <div id='Fname_box'>
                            <label htmlFor="Fname">First Name</label><br />
                            <input type="text" />
                        </div>
                        <div id='Lname_box'>
                            <label htmlFor="Lname">Last Name</label><br />
                            <input type="text" />
                        </div>
                    </div>
                    <div className='email_box'>
                        <label htmlFor="email">Email address</label><br />
                        <input type="email" />
                    </div>
                    <div className='country_box'>
                        <label htmlFor="country">Country</label><br />
                        <select name="country" id="country">
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>
                    <div className="address_box">
                        <label htmlFor="address">Address</label><br />
                        <input type="text" />
                    </div>
                    <div className="check_sub2">
                        <div>
                            <label htmlFor="city">City</label><br />
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="state">State</label><br />
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="pin">Pin code</label><br />
                            <input type="text" />
                        </div>
                    </div>
                </form>
                <hr />
                <div className="check_sub3">
                    <span>Reset</span>
                    <button>Add Address</button>
                </div>

                {/* address */}

                <div className="check_sub4">
                    <h5>Addresss</h5>
                    <p>choose from existing address</p>
                    <div className="check_sub5">
                        <div className="check_sub6">
                            <input type="radio" />
                            <div>
                                <h6>Jone doe</h6>
                                <p>Lorem ipsum dolor sit.</p>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className="check_sub7">
                            <p>Phone:1234567890</p>
                            <p>Delhi</p>
                        </div>
                    </div>
                    <div className="check_sub5">
                        <div className="check_sub6">
                            <input type="radio" />
                            <div>
                                <h6>Jone doe</h6>
                                <p>Lorem ipsum dolor sit.</p>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className="check_sub7">
                            <p>Phone:1234567890</p>
                            <p>Delhi</p>
                        </div>
                    </div>

                    <h4>Payment methods</h4>
                    <p>Choose one</p>
                    <div className="payment_box">
                        <input type="radio" id='cash' name='payment' />
                        <label htmlFor="Cash">Cash</label>
                    </div>
                    <div className="payment_box">
                        <input type="radio" id='card' name='payment' />
                        <label htmlFor="card">Card Payment</label>
                    </div>
                </div>
            </div>

            {/* right box */}
            <div className="checkout_box2">
                {/* <div className="check_box1"> */}
                    <h4>Cart</h4>
                    <div className="check_box1">
                        <div className="check_box2">
                            <div className="check_box3">
                                <img src={tmpImg} alt="" />
                            </div>
                            <div className="check_box4">
                                <p className="check_item">Throwback hip bag</p>
                                <p className="check_clr">blue</p>
                                <div className="check_box5">
                                    <p>Qty</p>
                                    <select name="qty" id="qty">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="check_box6">
                            <p className="check_item_price">$32</p>
                            <p className="check_remove">Remove</p>
                        </div>
                    </div>
                    <hr />
                    <div className="check_box7">
                        <p className="check_subtotal">Subtotal</p>
                        <p className="check_total">$226.00</p>
                    </div>
                    <button className="check_btn">Pay & Order</button>
                    <p id="continue_shop">or Continue Shopping <i class="bi bi-arrow-right"></i></p>
                </div>
            {/* </div> */}
        </div>
    </>
}

export default Checkout