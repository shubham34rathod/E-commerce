import '../../css/myOrder.css'
import Navbar from '../Navbar'
import tmpImg from '../../images/user_pic.webp'

function MyOrder() {
    return <>
        <Navbar></Navbar>
        <h3 id='order_title'>My Orders :</h3>
        <div className="order_container">
            <h5 className='order_no'>Order #1</h5>
            <p className='order_status'>Order Status : Pending</p>
            <div className="order_box1">
                <div className="order_sub1 ">
                    <div className="order_sub2">
                        <img src={tmpImg} alt="" />
                    </div>
                    <div className="order_sub3">
                        <p className='order_item_name'>iPhone X <br />
                            <span className='order_brand_name'>Apple</span>
                        </p>
                        <p className='order_qty'>Qty:2</p>
                    </div>
                </div>
                <p>$899</p>
            </div>
            <hr />
            <div className="order_box2">
                <p><b>Subtotal</b> <span>$1798 </span></p>
                <p><b>Total Items in Cart</b> <span>2 items </span></p>
            </div>
            <p id='order_address'>Shipping Address:</p>
            <div className="order_box3">
                <div className="order_sub4">
                    <h6>Abhishek R</h6>
                    <p>address Lorem ipsum dolor sit.</p>
                    <p>415010</p>
                </div>
                <div className="order_sub5">
                    <p>Phone:7894561231</p>
                    Banglore
                </div>
            </div>
        </div>
    </>
}

export default MyOrder