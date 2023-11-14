import '../../css/myOrder.css'
import Navbar from '../Navbar'
import tmpImg from '../../images/user_pic.webp'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function MyOrder() {

    let userInfo = useSelector((state) => state.products.userData)

    let [orderData, setOrderData] = useState([])

    useEffect(() => {
        async function fetchOrderData() {
            await fetch(`https://e-commerce-backend-e13o.onrender.com/order/fetch/${userInfo._id}`)
                .then((data) => data.json())
                .then((res) => {
                    // console.log(res);
                    setOrderData(res)
                })
                .catch((error) => console.log(error))
        }
        fetchOrderData()
    }, [orderData])

    return <>
        <Navbar></Navbar>
        <h3 id='order_title'>My Orders :</h3>
        {orderData.map((data, index) =>
            <div className="order_container">
                <h5 className='order_no'>Order #{index + 1}</h5>
                <p className='order_status'>Order Status : {data.status}</p>
                {data.items.map((a) =>
                    <div className="order_box1">
                        <div className="order_sub1 ">
                            <div className="order_sub2">
                                <img src={a.thumbnail} alt="" />
                            </div>
                            <div className="order_sub3">
                                <p className='order_item_name'>{a.title} <br />
                                    <span className='order_brand_name'>Apple</span>
                                </p>
                                <p className='order_qty'>Qty:{a.quantity}</p>
                            </div>
                        </div>
                        <p>${a.price}</p>
                    </div>
                )}
                <hr />
                {/* <div className="order_box2">
                    <p><b>Subtotal</b> <span>$1798 </span></p>
                    <p><b>Total Items in Cart</b> <span>2 items </span></p>
                </div> */}
                <p id='order_address'>Shipping Address:</p>
                <div className="order_box3">
                    <div className="order_sub4">
                        <h6>{data.selectedAddress.name}</h6>
                        <p>{data.selectedAddress.address}</p>
                        <p>{data.selectedAddress.pinCode}</p>
                    </div>
                    <div className="order_sub5">
                        <p>Phone:{data.selectedAddress.phone}</p>
                        {data.selectedAddress.city}
                    </div>
                </div>
            </div>
        )}
    </>
}

export default MyOrder