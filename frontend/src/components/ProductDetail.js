import '../css/productDetail.css'
import Navbar from './Navbar'
import tmpImg from '../images/user_pic.webp'

function ProductDetail() {
    return <>
        <Navbar></Navbar>
        <div className="P_detail_container">
            <div className="p_detail_img">
                <div className="p_img1">
                    <img src={tmpImg} alt="" />
                </div>
                <div className="p_img2">
                    <img src={tmpImg} alt="" />
                </div>
                <div className="p_img3">
                    <img src={tmpImg} alt="" />
                </div>
                <div className="p_img4">
                    <img src={tmpImg} alt="" />
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
                    <h2>$192</h2>
                    <div className="p_rating_box">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <span className="p_view_count">117 reviews</span>
                    </div>
                    <p>Color</p>
                    <div className="p_clr_circle">
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
                    </div>
                    <button className="p_add_btn">Add to Cart</button>
                </div>
            </div>
        </div>
    </>
}

export default ProductDetail