import '../css/productList.css'
import Navbar from './Navbar'
import tmpImg from '../images/shopping_logo.jpg'

function ProductList() {
    return <>
        <Navbar></Navbar>
        {/* <h4 className="site_name">E-Commerce</h4> */}
        <div className="product_container">
            <div className="product_box1">
                <h3>All Products</h3>
                <div className="product_sub1">
                    <select name="sort" id="sort">
                        <option value="sort">Sort</option>
                        <option value="price">Price</option>
                    </select>
                    <i class="bi bi-grid-fill"></i>
                </div>
            </div>
            <hr />
            <div className="product_box2">
                <div className="product_box3">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Color
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Category
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Size
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_box4">
                    <div className="product_sub2">
                        <div className="item_img">
                            <img src={tmpImg} alt="" />
                        </div>
                        <div className="product_sub3">
                            <p>BasicTee</p>
                            <p>$35</p>
                        </div>
                        <p className="iem_clr">Black</p>
                    </div>
                    <div className="product_sub2">
                        <div className="item_img">
                            <img src={tmpImg} alt="" />
                        </div>
                        <div className="product_sub3">
                            <p>BasicTee</p>
                            <p>$35</p>
                        </div>
                        <p className="iem_clr">Black</p>
                    </div>
                    <div className="product_sub2">
                        <div className="item_img">
                            <img src={tmpImg} alt="" />
                        </div>
                        <div className="product_sub3">
                            <p>BasicTee</p>
                            <p>$35</p>
                        </div>
                        <p className="iem_clr">Black</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProductList