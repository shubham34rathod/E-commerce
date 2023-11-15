import { useLocation } from 'react-router-dom'
import '../../css/adminProductFormPage.css'
import Navbar from '../Navbar'
import { useEffect, useState } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import { useSelector } from 'react-redux';

//this form used for both adding product and for editing product

function AdminProductFormPage() {

    let location = useLocation()
    let dummyBrand = useSelector((state) => state.products.brands)
    let dummyCategory_0 = useSelector((state) => state.products.category)
    console.log(location.state);

    const cld = new Cloudinary({ cloud: { cloudName: 'df78wetic' } })

    let [tmpArr, setTmpArr] = useState([])
    let [itemInfo, setItamInfo] = useState({
        title: '',
        description: '',
        price: '',
        discountPercentage: '',
        // rating:'',
        stock: '',
        brand: '',
        category: '',
        thumbnail: '',
        images: [],
        // deleted:'',
    })

    useEffect(()=>{
        if (location.state != null) {
            setItamInfo({
                title: location.state.title,
                description: location.state.description,
                price: location.state.price,
                discountPercentage: location.state.discountPercentage,
                // rating:'',
                stock: location.state.stock,
                brand: location.state.brand,
                category: location.state.category,
                thumbnail: location.state.thumbnail,
                images: location.state.images,
                // deleted:'',
            })
        }
    },[location.state])


    function handleItemData(e, prop) {
        setItamInfo((data) => ({
            ...data,
            [prop]: e.target.value
        }))
    }

    //! generating image url through cloudinary..........

    async function uploadToCloud(prop, e) {
        let videoFile = e.target.files[0]
        let data1 = new FormData()
        data1.append('file', videoFile)
        data1.append('upload_preset', 'video_YT')
        await fetch('https://api.cloudinary.com/v1_1/df78wetic/image/upload', {
            method: 'POST',
            body: data1
        },)
            .then((data) => data.json())
            .then((res) => {
                console.log(res);
                if (prop == 'thumbnail') {
                    setItamInfo((data) => ({
                        ...data,
                        thumbnail: res.secure_url
                    }))
                }
                else {
                    console.log('csad');
                    // tmpArr.push(res.secure_url)
                    setTmpArr((data) => ([
                        ...data,
                        res.secure_url
                    ]))
                }
            })
    }


    async function handleSubmit(e) {
        e.preventDefault()

        itemInfo.images.push(tmpArr)
        // console.log(itemInfo);
        await fetch(`https://e-commerce-backend-e13o.onrender.com/product/new_product`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(itemInfo)
        })
            .then((data) => data.json())
            .then((res) => {
                console.log(res);
            })
            .catch((error) => console.log(error))
    }

    return <>
        <Navbar></Navbar>
        <div className="admin_newProduct_box">
            {(location.state == null) ?
                <h5>Add product</h5>
                :
                <h5>Edit product</h5>
            }
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="name">Product Name</label><br />
                    <input type="text" id='name' value={itemInfo.title} onChange={(e) => handleItemData(e, 'title')} />
                </div>
                <div>
                    <label htmlFor="description">Description</label><br />
                    <textarea name="description" id="description" cols="100" rows="3" value={itemInfo.description} onChange={(e) => handleItemData(e, 'description')}></textarea>
                    <p id='admin_hint'>write a few sentence about product</p>
                </div>
                <div>
                    <label htmlFor="brand">Brand</label><br />
                    <select name="brand" id="brand" value={itemInfo.brand} onChange={(e) => handleItemData(e, 'brand')}>
                        <option value="">--select brand--</option>
                        {dummyBrand.map((data) => <option value={data.value}>{data.value}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="brand">Category</label><br />
                    <select name="brand" id="brand" value={itemInfo.category} onChange={(e) => handleItemData(e, 'category')}>
                        <option value="">--select category--</option>
                        {dummyCategory_0.map((data) => <option value={data.value}>{data.value}</option>)}
                    </select>
                </div>
                <div className='admin_inputGroup'>
                    <div>
                        <label htmlFor="price">Price</label><br />
                        <input type="number" id='price' value={itemInfo.price} onChange={(e) => handleItemData(e, 'price')} />
                    </div>
                    <div>
                        <label htmlFor="discount">Discount percentage</label><br />
                        <input type="number" id='discount' value={itemInfo.discountPercentage} onChange={(e) => handleItemData(e, 'discountPercentage')} />
                    </div>
                    <div>
                        <label htmlFor="stock">Stock</label><br />
                        <input type="number" id='price' value={itemInfo.stock} onChange={(e) => handleItemData(e, 'stock')} />
                    </div>
                </div>
                <div>
                    <label htmlFor="thumbnail">Thumbnail</label><br />
                    <input type="file" id='thumbnail' accept='image/*' onChange={(e) => uploadToCloud('thumbnail', e)} />
                </div>
                <div>
                    <label htmlFor="thumbnail">Image 1</label><br />
                    <input type="file" id='thumbnail' accept='image/*' onChange={(e) => uploadToCloud('image1', e)} />
                </div>
                <div>
                    <label htmlFor="thumbnail">Image 2</label><br />
                    <input type="file" id='thumbnail' accept='image/*' onChange={(e) => uploadToCloud('image2', e)} />
                </div>
                <div>
                    <label htmlFor="thumbnail">Image 3</label><br />
                    <input type="file" id='thumbnail' accept='image/*' onChange={(e) => uploadToCloud('image3', e)} />
                </div>
                <div>
                    <label htmlFor="thumbnail">Image 4</label><br />
                    <input type="file" id='thumbnail' accept='image/*' onChange={(e) => uploadToCloud('image4', e)} />
                </div>
                <button className='admin_addBtn'>Add Product</button>
            </form>
            {/* <hr /> */}
        </div>
    </>
}

export default AdminProductFormPage