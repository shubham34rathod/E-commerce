import '../css/productDetail.css'
import Navbar from './Navbar'
import tmpImg from '../images/user_pic.webp'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import gif from '../video/Shopping Loader - GIF Animation.gif'
import { useSelector } from 'react-redux'

function ProductDetail() {

    let location = useLocation()
    // console.log(location.state);
    let userInfo = useSelector((state) => state.products.login)
    let user = useSelector((state) => state.products.userData)

    let [productInfo, setProductInfo] = useState({})
    let [addCart, setCart] = useState({
        userId: '',
        productId: location.state
    })
    let [cartStatus, setCartStatus] = useState(false)
    let [checkLogin, setLogin] = useState(true)

    useEffect(() => {
        if (userInfo) {
            setCart((data) => ({
                ...data,
                userId: userInfo._id
            }))
        }
    }, [])
    // console.log(Object.keys(obj).length);

    useEffect(() => {
        async function getProductDetail() {
            await fetch(`https://e-commerce-backend-tdjw.onrender.com/product/fetchProduct_byID/${location.state}`)
                .then((res) => res.json())
                .then((data) => {
                    setProductInfo(data)
                    // console.log(data);
                })
        }
        getProductDetail()
    }, [productInfo])


    //! add to cart

    async function handleCart() {
        console.log(addCart);
        if (userInfo) {
            await fetch(`https://e-commerce-backend-tdjw.onrender.com/cart/addToCart/${user._id}`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addCart)
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    if (data == 'added to cart') {
                        setCartStatus(true)
                    }
                })
                .catch((error) => console.log(error))

        }
        else {
            setLogin(false)
            setTimeout(() => {
                setLogin(true)
            }, 5000)
        }
    }


    return <>
        <Navbar></Navbar>
        <div className="P_detail_container">
            {(Object.keys(productInfo).length == 0) ?
                <>
                    <div className='p_gif'>
                        <img src={gif} alt="" />
                    </div>
                </>
                :
                <><div className="p_detail_img">
                    <div className="p_img1">
                        <img src={productInfo.images[0]} alt="" />
                    </div>
                    <div className="p_img2">
                        <img src={productInfo.images[1]} alt="" />
                    </div>
                    <div className="p_img3">
                        <img src={productInfo.images[2]} alt="" />
                    </div>
                    <div className="p_img4">
                        <img src={productInfo.images[3]} alt="" />
                    </div>
                </div>
                    <div className="p_detail_box1">
                        <div className="p_detail_box2">
                            <h5>Shirt set</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus eum temporibus nostrum. Iusto unde deserunt dolorum repellendus repudiandae temporibus, obcaecati, vitae, qui iste numquam itaque.</p>
                            <h6 id="highlight">Highlights</h6>
                            <p className="highlight">. Lorem ipsum dolor sit amet.5</p>
                            <p className="highlight">. Lorem ipsum dolor sit amet.5</p>
                            <p className="highlight">. Lorem ipsum dolor sit amet.5</p>
                            <p className="highlight">. Lorem ipsum dolor sit amet.5</p>
                            <h6 id="detalis">Details</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et voluptate atque, cupiditate earum facere fugit nesciunt enim harum soluta.</p>
                        </div>
                        <div className="p_detail_box3">
                            <h2>$ {(productInfo.price)-(Math.ceil((productInfo.price)*productInfo.discountPercentage/100))}</h2>
                            <del>${productInfo.price}</del> <span>{productInfo.discountPercentage}% off</span>
                            <div className="p_rating_box">
                                <i class="bi bi-star-fill" style={{color:'orangered'}}></i>
                                {/* <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i> */}
                                {/* <span className="p_view_count">117 reviews</span> */}
                                <span className="p_view_count">{productInfo.rating}</span>
                            </div>
                            {/* <p>Color</p> */}
                            {/* <div className="p_clr_circle">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>Size</p>
                            <div className="p_item_size">
                                <div>XXS</div>
                                <div>XS</div>
                                <div>S</div>
                                <div>M</div>
                                <div>L</div>
                                <div>XL</div>
                                <div>2XL</div>
                                <div>3XL</div>
                            </div> */}
                            <button className="p_add_btn" onClick={handleCart}>
                                {(cartStatus) ?
                                    <>
                                        <p><i class="bi bi-check-lg"></i>Go To Cart</p>
                                        {/* <button className='p_removeFromCart'>Remove from cart</button> */}
                                    </>
                                    :
                                    <p><i class="bi bi-plus-circle"></i>Add to Cart</p>
                                }
                            </button>
                            <button className="p_placeOrder">
                                    Place Order
                            </button>
                            {!checkLogin
                                &&
                                <div class="alert alert-danger" role="alert">
                                    Please login to access cart  &nbsp;<a href="/login" class="alert-link">Login</a>
                                </div>
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    </>
}

export default ProductDetail
