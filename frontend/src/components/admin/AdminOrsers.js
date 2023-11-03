import '../../css/adminOrders.css'
import Navbar from '../Navbar'
import tmpImg from '../../images/user_pic.webp'

function AdminOrders() {
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