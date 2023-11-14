import '../../css/adminOrders.css'
import Navbar from '../Navbar'
import tmpImg from '../../images/user_pic.webp'
import { useEffect, useState } from 'react'
import axios from 'axios'

function AdminOrders() {

    let [orderData, setOrderData] = useState([])
    let [statusVar, setStatusVar] = useState(false)

    //! order data....................

    useEffect(() => {
        async function orderData() {
            await axios.get(`https://e-commerce-backend-tdjw.onrender.com/order/fetch-all`)
                .then((res) => {
                    // console.log(res.data);
                    setOrderData(res.data)
                })
                .catch((error) => console.log(error))
        }
        orderData()
    }, [orderData])

    //! update status of order...................

    async function handleStatus(status,itemId)
    {
        console.log(status,itemId);
        await axios.post(`https://e-commerce-backend-tdjw.onrender.com/order/update/${itemId}`,{status:status})
        .then((res)=>{
            console.log(res.data);
            setStatusVar(false)
        })
        .catch((error)=>console.log(error))
    }

    return <>
        <Navbar></Navbar>
        <div className="admin_container">
            <table>
                <thead>
                    <tr>
                        <th>ORDER</th>
                        <th>ITEMS</th>
                        <th>QUANTITY</th>
                        <th>PRICE / ITEM</th>
                        <th>TOTAL AMOUNT</th>
                        <th>SHIPPING ADDRESS</th>
                        <th>STATUS</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {orderData.map((data, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>
                                {data.items.map((a) =>
                                    <div className="admin_items my-3">
                                        <div className="admin_item_img">
                                            <img src={a.thumbnail} alt="" />
                                        </div>
                                        <p>{a.title}</p>
                                    </div>
                                )}
                            </td>
                            <td>
                                {data.items.map((a) =>
                                    <><p style={{ lineHeight: '3px', paddingTop: '5px' }}>{a.quantity}</p><br /></>
                                )}
                                {/* #1 */}
                            </td>
                            <td>150000</td>
                            <td>{data.totalAmount}</td>
                            <td className='admin_address'>
                                <p>name:- {data.selectedAddress.name}</p>
                                <p>phone:- {data.selectedAddress.phone}</p>
                                <p>address: -{data.selectedAddress.address}</p>
                                <p>city:- {data.selectedAddress.city}, pincode:- {data.selectedAddress.pinCode}</p>
                            </td>
                            <td>
                                {(!statusVar) ?
                                    <p>{data.status}</p>
                                    :
                                    <select name="status" id="status" value={data.status} onChange={(e)=>handleStatus(e.target.value,data._id)}>
                                        <option value="">--select--</option>
                                        <option value="dispatched">dispatched</option>
                                        <option value="delivered">delivered</option>
                                        <option value="cancelled">cancelled</option>
                                        <option value="pending">pending</option>
                                    </select>
                                }
                            </td>
                            <td>
                                <i class="bi bi-eye"></i>
                                <i class="bi bi-pencil-square" onClick={() =>setStatusVar((!statusVar)?true:false)}></i>
                            </td>
                        </tr>
                    )}
                    <tr>
                        <td>1</td>
                        <td>
                            <div className="admin_items">
                                <div className="admin_item_img">
                                    <img src={tmpImg} alt="" />
                                </div>
                                <p>I-phone x</p>
                            </div>
                        </td>
                        <td>#1</td>
                        <td>150000</td>
                        <td>150000</td>
                        <td className='admin_address'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia exercitationem beatae expedita, nihil aspernatur veritatis.
                        </td>
                        <td><p>Pending</p></td>
                        <td>
                            <i class="bi bi-eye"></i>
                            <i class="bi bi-pencil-square"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}

export default AdminOrders
