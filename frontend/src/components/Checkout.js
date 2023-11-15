import '../css/checkout.css'
import Navbar from './Navbar'
import tmpImg from '../images/shopping_logo.jpg'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentOrder } from './store/productSlice'

function Checkout() {

    let navigate = useNavigate()
    let dispatch=useDispatch()
    let userInfo = useSelector((state) => state.products.userData)

    let [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        city: '',
        state: '',
        pinCode: ''
    })

    let [orderData, setOrderData] = useState({
        items: [],
        totalAmount: '',
        totalItems: '',
        user: '',
        paymentMethod: '',
        // paymentStatus: '',
        // status: '',
        selectedAddress: ''
    })

    let addAmount = 0

    function handleOrderData(e, prop) {

    }

    useEffect(() => {
        if (userInfo) {
            setOrderData((data) => ({
                ...data,
                user: userInfo._id
            }))
        }
    }, [userInfo])

    function handleUserData(e, prop) {
        setUserData((data) => ({
            ...data,
            [prop]: e.target.value
        }))
    }


    //! fetch cart data......................

    let [cartData, setCartData] = useState([])

    useEffect(() => {
        async function fetchCart() {
            await fetch(`https://e-commerce-backend-tdjw.onrender.com/cart/get/${userInfo._id}`)
                .then((data) => data.json())
                .then((res) => {
                    // console.log('cart', res);
                    setCartData(res)
                    setOrderData((data) => ({
                        ...data,
                        items: res,
                        totalItems: res.length,
                        user: userInfo._id,
                        totalAmount: addAmount
                    }))
                })
                .catch((error) => console.log(error))
        }
        fetchCart()
    }, [cartData, orderData, addAmount])

    for (let x = 0; x < cartData.length; x++) {
        addAmount += ((cartData[x].quantity) * (cartData[x].price))
    }

    // useEffect(()=>{
    //     setOrderData((data)=>({
    //         ...data,
    //         totalAmount:addAmount
    //     }))
    // },[])



    //! fetch user data (address)......................

    let [userAddress, setUserAddress] = useState([])

    useEffect(() => {
        async function fetchUser() {
            await fetch(`https://e-commerce-backend-tdjw.onrender.com/user/${userInfo._id}`)
                .then((data) => data.json())
                .then((res) => {
                    //   console.log('user', res);
                    setUserAddress(res.address)
                })
                .catch((error) => console.log(error))
        }
        fetchUser()
    }, [userAddress])


    //! adding address to database..............

    async function handleData(e) {
        e.preventDefault()
        // console.log('add',userData);
        await fetch(`https://e-commerce-backend-tdjw.onrender.com/user/newAddress/${userInfo._id}`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then((data) => data.json())
            .then((res) => {
                // console.log(res);               
            })
            .catch((error) => console.log(error))
    }


    // //! add to order data..........................

    // async function handleOrder(e) {
    //     e.preventDefault()
    //     // console.log('add',userData);
    //     await fetch(`http://localhost:8000/order/new_order/${userInfo._id}`, {
    //         method: 'post',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(userData)
    //     })
    //         .then((data) => data.json())
    //         .then((res) => {
    //             // console.log(res);               
    //         })
    //         .catch((error) => console.log(error))
    // }


    //! handle submit order................

    async function handleSubmitOrder() {
        // navigate('/order_success')
        // console.log(orderData)

        if (orderData.paymentMethod === 'cash') {
            await fetch(`https://e-commerce-backend-tdjw.onrender.com/order/new_order`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderData)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (data[0] === 'order created') {
                        // navigate('/order_success', { state: data[1] })
                        dispatch(setCurrentOrder(data[1]))
                        navigate(`/order_success/${data[1]}`)
                    }
                })
                .catch((error) => console.log(error))
        }
        if (orderData.paymentMethod === 'card') {
            // navigate(`/strip_payment`,{state:orderData})
            alert('card is not working. select cash on delivery')
        }


    }


    return <>
        <Navbar></Navbar>
        <div className="checkout_container">
            <div className="checkout_box1">
                <h4>Personal Information</h4>
                <p>User permanent address for better service</p>

                <h6 className='checkout_addAddress'>Add New Address</h6>
                <form onSubmit={(e) => { handleData(e) }}>
                    <div className="check_sub1">
                        <div id='Fname_box'>
                            <label htmlFor="Fname">Full Name</label><br />
                            <input type="text" value={userData.name} onChange={(e) => handleUserData(e, 'name')} />
                        </div>
                        {/* <div id='Lname_box'>
                            <label htmlFor="Lname">Last Name</label><br />
                            <input type="text" />
                        </div> */}
                    </div>
                    <div className='email_box'>
                        <label htmlFor="email">Email address</label><br />
                        <input type="email" value={userData.email} onChange={(e) => handleUserData(e, 'email')} />
                    </div>
                    <div className='email_box'>
                        <label htmlFor="phone">Phone</label><br />
                        <input type="number" value={userData.phone} onChange={(e) => handleUserData(e, 'phone')} />
                    </div>
                    <div className='country_box'>
                        <label htmlFor="country">Country</label><br />
                        <select name="country" id="country" value={userData.country} onChange={(e) => handleUserData(e, 'country')}>
                            <option value="">Select</option>
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>
                    <div className="address_box">
                        <label htmlFor="address">Address</label><br />
                        <input type="text" value={userData.address} onChange={(e) => handleUserData(e, 'address')} />
                    </div>
                    <div className="check_sub2">
                        <div>
                            <label htmlFor="city">City</label><br />
                            <input type="text" value={userData.city} onChange={(e) => handleUserData(e, 'city')} />
                        </div>
                        <div>
                            <label htmlFor="state">State</label><br />
                            <input type="text" value={userData.state} onChange={(e) => handleUserData(e, 'state')} />
                        </div>
                        <div>
                            <label htmlFor="pin">Pin code</label><br />
                            <input type="text" value={userData.pinCode} onChange={(e) => handleUserData(e, 'pinCode')} />
                        </div>
                    </div>
                    <hr />
                    <div className="check_sub3">
                        <span>Reset</span>
                        <button>Add Address</button>
                    </div>
                </form>

                <div className="check_sub4">
                    <h5>Addresss</h5>
                    {userAddress.map((data) =>
                        <>
                            <p>choose from existing address</p>
                            <div className="check_sub5">
                                <div className="check_sub6">
                                    <input type="radio" name='address' onClick={() => {
                                        setOrderData((a) => ({
                                            ...a,
                                            selectedAddress: data
                                        }))
                                    }
                                    } />
                                    <div>
                                        <h6>{data.name}</h6>
                                        <p>{data.address}</p>
                                        <p>{data.pinCode}</p>
                                    </div>
                                </div>
                                <div className="check_sub7">
                                    <p>Phone:{data.phone}</p>
                                    <p>{data.city}</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <h4>Payment methods</h4>
                <p>Choose one</p>
                <div className="payment_box">
                    <input type="radio" id='cash' name='payment' onClick={() => setOrderData((data) => ({
                        ...data,
                        paymentMethod: 'cash'
                    }))} />
                    <label htmlFor="Cash">Cash</label>
                </div>
                <div className="payment_box">
                    <input type="radio" id='card' name='payment' onClick={() => setOrderData((data) => ({
                        ...data,
                        paymentMethod: 'card'
                    }))} />
                    <label htmlFor="card">Card Payment</label>
                </div>
            </div>

            {/* right box */}
            <div className="checkout_box2">
                {/* <div className="check_box1"> */}
                <h4>Cart</h4>
                {cartData.map((data) =>
                    <>
                        <div className="check_box1">
                            <div className="check_box2">
                                <div className="check_box3">
                                    <img src={data.thumbnail} alt="" />
                                </div>
                                <div className="check_box4">
                                    <p className="check_item">{data.title}</p>
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
                                <p className="check_item_price">${data.price}</p>
                                <p className="check_remove">Remove</p>
                            </div>
                        </div>
                        <hr />
                    </>
                )}
                <div className="check_box7">
                    <p className="check_subtotal">Subtotal</p>
                    <p className="check_total">${addAmount}</p>
                </div>
                <button className="check_btn" onClick={handleSubmitOrder}>Pay & Order</button>
                <p id="continue_shop" onClick={() => navigate('/')}>or Continue Shopping <i class="bi bi-arrow-right"></i></p>
            </div>
            {/* </div> */}
        </div>
    </>
}

export default Checkout
