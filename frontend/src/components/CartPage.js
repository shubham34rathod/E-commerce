import '../css/cartPage.css'
import Navbar from './Navbar'
import tmpImg from '../images/shopping_logo.jpg'

function CartPage()
{
    return <>
        <Navbar></Navbar>
        <div className="cart_container">
            <h4>Cart</h4>
            <div className="cart_box1">
                <div className="cart_child1">
                    <div className="cart_sub1">
                        <img src={tmpImg} alt="" />
                    </div>
                    <div className="cart_sub2">
                        <p className="cart_item_name">Throwback hip bag</p>
                        <p className="cart_item_color">blue</p>
                        <div className="Qty">
                            <p>Qty</p>
                            <select name="qty" id="qty">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="cart_child2">
                    <p className="cart_item_price">$32</p>
                    <p className="remove_btn">Remove</p>
                </div>
            </div>
            <hr />
            <div className="cart_box1">
                <div className="cart_child1">
                    <div className="cart_sub1">
                        <img src={tmpImg} alt="" />
                    </div>
                    <div className="cart_sub2">
                        <p className="cart_item_name">Throwback hip bag</p>
                        <p className="cart_item_color">blue</p>
                        <div className="Qty">
                            <p>Qty</p>
                            <select name="qty" id="qty">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="cart_child2">
                    <p className="cart_item_price">$32</p>
                    <p className="remove_btn">Remove</p>
                </div>
            </div>
            <hr />
            <div className="cart_box2">
                <p className="total_txt">Subtotal</p>
                <p className="total_price">$226.00</p>
            </div>
            <button className="check_btn">Checkout</button>
            <p id="continue_shop">or Continue Shopping <i class="bi bi-arrow-right"></i></p>
        </div>
    </>
}

export default CartPage