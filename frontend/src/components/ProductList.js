import '../css/productList.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllProducts, setBrands, setCategory } from './store/productSlice'
import Navbar from './Navbar'
import tmpImg from '../images/shopping_logo.jpg'
import axios from 'axios'
import { json, useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate';

function ProductList() {

    let navigate = useNavigate()
    let loginStatus = useSelector((state) => state.products.login)

    if(!loginStatus)
    {
        // navigate('/login')
    }

    //! style for product list (display grid)...........

    let styleObj = {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        padding: "10px",
        gridGap: "40px",
    }


    let dummyData = useSelector((state) => state.products.products)
    let dummyBrand = useSelector((state) => state.products.brands)
    let dummyCategory = useSelector((state) => state.products.category)
    // console.log('d',dummyBrand)
    let dispatch = useDispatch()

    let [filter, setFilter] = useState({})
    let [pagination, setPegination] = useState(1)
    let [totalPages, setTotalPages] = useState()
    let [gridView, setGridView] = useState(true)

    // useEffect(() => {
    //     async function getProductData() {
    //         await fetch('https://dummyjson.com/products?limit=100')
    //             // fetch('https://dummyjson.com/products/category/smartphones')
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 // console.log(JSON.stringify(data.products));
    //                 // console.log([...new Set([...data.products.map((a) => a.category)]).keys()]);
    //                 // dispatch(setAllProducts(data.products))
    //                 // dispatch(setBrands([...new Set([...data.products.map((a) => a.brand)]).keys()]))
    //                 // dispatch(setCategory([...new Set([...data.products.map((a) => a.category)]).keys()]))
    //             })
    //             .catch((error) => console.log(error))
    //     }
    //     getProductData()
    // }, [])

    // ! variable to set query..........

    let [query, setQuery] = useState('')

    function handleFilter(e, filterType, filterValue) {
        if (e.target.checked) {
            // console.log(e.target.checked,filterType,filterValue.value);
            setQuery(query + `${filterType}=${filterValue.value}&`)
        }
        if (!e.target.checked) {
            // console.log(e.target.checked,filterType,filterValue);
            // console.log(query.search(`${filterType}=${filterValue}&`));
            setQuery(query.replace(`${filterType}=${filterValue.value}&`, ''))
        }
    }

    //! fetching filtered data.......................

    useEffect(() => {
        // console.log('page',pagination);
        async function getAllProducts() {
            await fetch(`https://e-commerce-backend-e13o.onrender.com/product/get_products?_page=${pagination}&${query}`)
                .then((res) => res.json())
                .then((data) => {
                    dispatch(setAllProducts(data[0]))
                    console.log('back',data);
                    setTotalPages(data[1])
                })
            // console.log(query);

        }
        getAllProducts()
    }, [query, pagination, dispatch])


    //! fetching brand and category................................

    useEffect(() => {
        async function fetchingData() {
            await axios.get(`https://e-commerce-backend-e13o.onrender.com/brand`)
                .then((res) => {
                    // console.log(res.data);
                    dispatch(setBrands(res.data))
                })
                .catch((error) => console.log(error))


            await axios.get(`https://e-commerce-backend-e13o.onrender.com/category`)
                .then((res) => {
                    // console.log(res.data);
                    dispatch(setCategory(res.data))
                })
                .catch((error) => console.log(error))
        }
        fetchingData()
    }, [])


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
                    <i className="bi bi-grid-fill" style={{ fontSize: '20px' }} onClick={() => setGridView((gridView) ? false : true)}></i>
                </div>
            </div>
            <hr />
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
                                    {dummyBrand.map((data) =>
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
                                    {dummyCategory.map((data) =>
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
                {(gridView) ?
                    <div className="product_box4" style={styleObj}>
                        {(!dummyData) ?
                            <div className="product_loader" style={{ marginLeft: '300px' }}>
                                <div className="spinner-border text-primary" role="status" style={{ width: '30px', height: '30px', }}>
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <span>Loading.....</span>
                            </div>
                            :
                            dummyData.map((data) => <>
                                <div className="product_sub2" onClick={() => navigate('/product_detail', { state: data._id })}>
                                    <div className="item_img">
                                        <img src={data.thumbnail} alt="" />
                                    </div>
                                    <div className="product_sub3">
                                        <p id="product_item_name">{data.title}</p>
                                        <div style={{ lineHeight: '5px', marginTop: '5px' }}>
                                            <p id="product_price">${(data.price)-(Math.ceil((data.price)*data.discountPercentage/100))}</p>
                                            <p style={{ color: 'gray' }}><del>${data.price}</del></p>
                                        </div>
                                    </div>
                                    <i className="bi bi-star-fill" ></i>
                                    <p className="iem_clr" style={{ display: 'inline' }}>{data.rating}</p>
                                </div>
                            </>)
                        }
                        {/* <div className="producnt_sub4">
                        <div className="product_item_img">
                            <img src={tmpImg} alt="" />
                        </div>
                        <div className="product_item_info">
                            <h6 style={{display:'inline'}}>Iphone x</h6> <span><i class="bi bi-star-fill"></i>4.5</span>
                            <p>Apple</p>
                            <p className="item_desc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a numquam mollitia debitis voluptatem quisquam cumque eligendi libero, ea ratione!
                            </p>
                            <h2>$589</h2>
                            <del>$1100</del>
                        </div>
                    </div> */}
                    </div>
                    :
                    <div className="producnt_sub4">
                        {(!dummyData) ?
                            <div className="product_loader" style={{ marginLeft: '300px' }}>
                                <div className="spinner-border text-primary" role="status" style={{ width: '30px', height: '30px', }}>
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <span>Loading.....</span>
                            </div>
                            :
                            dummyData.map((data) => <>
                                <div className="product_sub5" onClick={()=>navigate('/product_detail', { state: data._id })}>
                                    <div className="product_item_img">
                                        <img src={data.thumbnail} alt="" />
                                    </div>
                                    <div className="product_item_info">
                                        <h6 style={{ display: 'inline' }}>{data.title}</h6> <span><i class="bi bi-star-fill"></i>{data.rating}</span>
                                        <p>{data.brand}</p>
                                        <p className="item_desc">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a numquam mollitia debitis voluptatem quisquam cumque eligendi libero, ea ratione!
                                        </p>
                                        <h4>$ {(data.price)-(Math.ceil((data.price)*data.discountPercentage/100))}</h4>
                                        <del>$ {data.price}</del> <span>{data.discountPercentage}% off</span>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>
                }
            </div>
            <div className='product_box5'>
                <div className="product_box6">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={(e) => {
                            setPegination((e.selected) + 1)
                            // console.log(e.selected+1);
                        }}
                        pageRangeDisplayed={5}
                        pageCount={Math.ceil(totalPages / 16)}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        marginPagesDisplayed={2}
                        // onPageChange={this.handlePageClick}
                        containerClassName="pagination justify-content-center"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        activeClassName="active"
                    />
                </div>
            </div>
        </div>
    </>
}

export default ProductList