import '../css/cartPage.css'
import Navbar from './Navbar'
import tmpImg from '../images/shopping_logo.jpg'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCartCount,setCurrentOrder } from './store/productSlice'
import gif from '../video/Shopping Loader - GIF Animation.gif'

function CartPage() {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let userInfo = useSelector((state) => state.products.userData)
    let [cartData, setCartData] = useState([])
    let totalAmount = 0


    //! fetching cart items.........................

    useEffect(() => {
        async function fetchCart() {
            await fetch(`https://e-commerce-backend-tdjw.onrender.com/cart/get/${userInfo._id}`)
                .then((data) => data.json())
                .then((res) => {
                    // console.log('cart', res.length);
                    setCartData(res)
                    dispatch(setCartCount(res.length))
                    dispatch(setCurrentOrder(res))
                })
                .catch((error) => console.log(error))
        }
        fetchCart()
    }, [cartData, dispatch, setCartCount])

    for (let x = 0; x < cartData.length; x++) {
        totalAmount += ((cartData[x].quantity) * (cartData[x].price))
    }


    //! update quantity.....................

    let tmp

    async function handleQuantity(e, id) {
        tmp = parseInt(e.target.value)
        // console.log(e.target.value);
        // console.log(tmp);

        await fetch(`https://e-commerce-backend-tdjw.onrender.com/cart/update/${id}`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: tmp })
        })
            .then((data) => data.json())
            .then((res) => {
                // console.log(res)
            })
            .catch((error) => console.log(error))
    }


    //! delete item from cart.....................

    async function handleDeleteItem(id) {
        console.log(id);
        await fetch(`https://e-commerce-backend-tdjw.onrender.com/cart/delete/${id}`)
            .then((data) => data.json())
            .then((res) => console.log(res))
            .catch((error) => console.log(error))
    }




    return <>
        <Navbar></Navbar>
        <div className="cart_container">
            <h4>Cart</h4>
            {(cartData.length == 0) ?
                <>
                    <div className='p_gif'>
                        <img src={gif} alt="" />
                    </div>
                </>
                :
                cartData.map((data) =>
                    <>
                        <div className="cart_box1">
                            <div className="cart_child1">
                                <div className="cart_sub1">
                                    <img src={data.thumbnail} alt="" />
                                </div>
                                <div className="cart_sub2">
                                    <p className="cart_item_name">{data.title}</p>
                                    <p className="cart_item_color">blue</p>
                                    <div className="Qty">
                                        <p>Qty</p>
                                        <select name="qty" id="qty" value={data.quantity} onChange={(e) => handleQuantity(e, data._id)}>
                                            <option value=''>select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="cart_child2">
                                <p className="cart_item_price">${data.price}</p>
                                <p className="remove_btn" onClick={() => handleDeleteItem(data._id)}>Remove</p>
                            </div>
                        </div>
                        <hr />
                    </>
                )
            }
            <div className="cart_box2">
                <p className="total_txt">Subtotal</p>
                <p className="total_price">${totalAmount}</p>
            </div>
            <button className="check_btn" onClick={() => navigate('/checkout')}>Checkout</button>
            <p id="continue_shop" onClick={()=>navigate('/')}>or Continue Shopping <i class="bi bi-arrow-right"></i></p>
        </div>
    </>
}

export default CartPage
