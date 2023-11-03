import '../../css/adminProductFormPage.css'
import Navbar from '../Navbar'

//this form used for both adding product and for editing product

function AdminProductFormPage()
{
    return <>
        <Navbar></Navbar>
        <div className="admin_newProduct_box">
            <h5>Add product</h5>
            <form>
                <div>
                    <label htmlFor="name">Product Name</label><br />
                    <input type="text" id='name'/>
                </div>
                <div>
                    <label htmlFor="description">Description</label><br />
                    <textarea name="description" id="description" cols="100" rows="3"></textarea>
                    <p id='admin_hint'>write a few sentence about product</p>
                </div>
                <div>
                    <label htmlFor="brand">Brand</label><br />
                    <select name="brand" id="brand">
                        <option value="">--select brand--</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="brand">Category</label><br />
                    <select name="brand" id="brand">
                        <option value="">--select category--</option>
                    </select>
                </div>
                <div className='admin_inputGroup'>
                    <div>
                        <label htmlFor="price">Price</label><br />
                        <input type="number" id='price'/>
                    </div>
                    <div>
                        <label htmlFor="discount">Discount percentage</label><br />
                        <input type="number" id='discount'/>
                    </div>
                    <div>
                        <label htmlFor="stock">Stock</label><br />
                        <input type="number" id='price'/>
                    </div>
                </div>
                <div>
                    <label htmlFor="thumbnail">Thumbnail</label><br />
                    <input type="file"  id='thumbnail' accept='image/*'/>
                </div>
                <div>
                    <label htmlFor="thumbnail">Thumbnail</label><br />
                    <input type="file"  id='thumbnail' accept='image/*'/>
                </div>
                <div>
                    <label htmlFor="thumbnail">Thumbnail</label><br />
                    <input type="file"  id='thumbnail' accept='image/*'/>
                </div>
                <div>
                    <label htmlFor="thumbnail">Thumbnail</label><br />
                    <input type="file"  id='thumbnail' accept='image/*'/>
                </div>
                <button className='admin_addBtn'>Add Product</button>
            </form>
            {/* <hr /> */}
        </div>
    </>
}

export default AdminProductFormPage