import { useLocation, useNavigate, useParams } from "react-router-dom"


function OrderSuccess() {

    let navigate=useNavigate()
    // let location=useLocation()
    let location=useParams()

    return <>
        <div className="Container404">
            <p className='statusCode'>Order Successfully placed</p>
            {/* <h2>Order Number #{location.state}</h2> */}
            <h2>Order Number #{location.state}</h2>
            <p className='errorMsg'>You can check your order in My Account &gt; My Order</p>
            <button onClick={()=>navigate('/')}>Go back home</button>
        </div>
    </>
}

export default OrderSuccess