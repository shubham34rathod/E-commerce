import '../../css/adminProductLiit.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllProducts, increment } from '.././store/productSlice'
import Navbar from '.././Navbar'
import tmpImg from '../../images/shopping_logo.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AdminProductList() {
    let navigate = useNavigate()
    let dummyData = useSelector((state) => state.products.products)
    let dummyBrand = useSelector((state) => state.products.brands)
    let dummyCategory_0=useSelector((state)=>state.products.category)
    let dispatch = useDispatch()

    let [dummyCategory, setCategory] = useState([])


    function handleFilter(e, filterType, filterValue) {
        // console.log(filterType, filterValue)
        console.log('bbx', e.target.checked)
    }


    return <>
        <Navbar></Navbar>
        {/* <h4 className="site_name">E-Commerce</h4> */}
        <div className="product_container">
            <div className="product_box1">
                <h3>All Products</h3>
                <div className="product_sub1">
                    <select name="sort" id="sort">
                        <option value="sort" id='option_1'>Sort</option>
                        <option value="price">Best Rating</option>
                        <option value="price">Price: Low to High</option>
                        <option value="price">Price: High to Low</option>
                    </select>
                    <i className="bi bi-grid-fill"></i>
                </div>
            </div>
            <hr />

            <button className='add_new_Product' onClick={()=>navigate('/adminProductForm')}>Add New Product</button>

            <div className="product_box2">
                <div className="product_box3">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Brands
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    {(!dummyBrand) ?
                                        <div className="product_loader" style={{ marginLeft: '300px' }}>
                                            <div className="spinner-border text-primary" role="status" style={{ width: '30px', height: '30px', }}>
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                            <span>Loading.....</span>
                                        </div>
                                        :
                                        dummyBrand.map((data) =>
                                            // console.log(data);
                                            <div>
                                                <input type="checkbox" id='brand' onChange={(e) => handleFilter(e, 'brand', data)} />
                                                <label htmlFor="brand">{data.value}</label>
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Category
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    {(!dummyCategory_0) ?
                                        <div className="product_loader" style={{ marginLeft: '300px' }}>
                                            <div className="spinner-border text-primary" role="status" style={{ width: '30px', height: '30px', }}>
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                            <span>Loading.....</span>
                                        </div>
                                        :
                                        dummyCategory_0.map((data) =>
                                            <div>
                                                <input type="checkbox" id='category' onChange={(e) => handleFilter(e, 'category', data)} />
                                                <label htmlFor="category">{data.value}</label>
                                            </div>
                                        )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product_box4">
                    {(!dummyData) ?
                        <div className="product_loader" style={{ marginLeft: '300px' }}>
                            <div className="spinner-border text-primary" role="status" style={{ width: '30px', height: '30px', }}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <span>Loading.....</span>
                        </div>
                        :
                        dummyData.map((data) => <>
                                <div className="admin_product_sub2" >
                                    <div className="item_img" onClick={() => navigate('/product_detail',{ state: data._id })}>
                                        <img src={data.thumbnail} alt="" />
                                    </div>
                                    <div className="product_sub3">
                                        <p id="product_item_name">{data.title}</p>
                                        <div style={{ lineHeight: '5px', marginTop: '5px' }}>
                                            <p id="product_price">${data.price}</p>
                                            <p style={{ color: 'gray' }}><del>${data.price}</del></p>
                                        </div>
                                    </div>
                                    <i className="bi bi-star-fill" ></i>
                                    <p className="iem_clr" style={{ display: 'inline' }}>{data.rating}</p>
                                    <button className='edit_product' onClick={() => navigate('/adminProductForm',{state:data})}>Edit Product</button>                                                                                                                                                                                                                                                                               
                                </div>
                        </>)
                    }
                </div>
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <li className="page-item disabled">     
                        <a className="page-link">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </>
}

export default AdminProductList