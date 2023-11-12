import { useLocation, useNavigate } from "react-router-dom"


function OrderSuccess() {

    let navigate=useNavigate()
    let location=useLocation()

    return <>
        <div className="Container404">
            <p className='statusCode'>Order Successfully placed</p>
            <h2>Order Number #{location.state}</h2>
            <p className='errorMsg'>You can check your order in My Account &gt; My Order</p>
            <button onClick={()=>navigate('/')}>Go back home</button>
        </div>
    </>
}

export default OrderSuccess