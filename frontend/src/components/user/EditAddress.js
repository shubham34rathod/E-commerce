import { useState } from 'react';
import '../../css/editAddress.css'
import { useSelector } from 'react-redux';

function EditAddress(prop) {

    let userInfo=useSelector((state)=>state.products.userData)

    let [userAddress,setAddress]=useState({
        name:'',
        email:'',
        phone:'',
        country:'',
        address:'',
        city:'',
        state:'',
        pinCode:''
    })

    function handleUserData(e,prop) {
        setAddress((data)=>({
            ...data,
            [prop]:e.target.value
        }))
    }

    async function handleSubmit(e)
    {
        e.preventDefault()
        console.log(userAddress);
        async function getAllProducts()
        {
            await fetch(`https://e-commerce-backend-e13o.onrender.com/user/newAddress/${userInfo._id}`,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(userAddress)
            })
            .then((res)=>res.json())
            .then((data)=>{
                // console.log('back',data);
            })
        }
        getAllProducts()
    }

    return <>
        <form className='edit_form' onSubmit={(e) => { handleSubmit(e) }}>
            <div className="edit_box_1">
                <div className='edit_sub_1'>
                    <label htmlFor="Fname">Full Name</label><br />
                    <input type="text" onChange={(e) => handleUserData(e, 'name')} />
                </div>
                <div className='edit_sub_1'>
                    <label htmlFor="email">Email address</label><br />
                    <input type="email" onChange={(e) => handleUserData(e, 'email')} />
                </div>
            </div>
            <div className="edit_box_1">
                <div className='edit_sub_1'>
                    <label htmlFor="phone">Phone</label><br />
                    <input type="number" onChange={(e) => handleUserData(e, 'phone')} />
                </div>
                <div className='edit_sub_1'>
                    <label htmlFor="country">Country</label><br />
                    <select name="country" id="country" onChange={(e) => handleUserData(e, 'country')}>
                        <option value="">Select</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                    </select>
                </div>
            </div>
            <div className="edit_box_2">
                <label htmlFor="address">Address</label><br />
                <input type="text" onChange={(e) => handleUserData(e, 'address')} />
            </div>
            <div className="edit_box_3">
                <div>
                    <label htmlFor="city">City</label><br />
                    <input type="text" onChange={(e) => handleUserData(e, 'city')} />
                </div>
                <div>
                    <label htmlFor="state">State</label><br />
                    <input type="text" onChange={(e) => handleUserData(e, 'state')} />
                </div>
                <div>
                    <label htmlFor="pin">Pin code</label><br />
                    <input type="text" onChange={(e) => handleUserData(e, 'pinCode')} />
                </div>
            </div>
            <hr />
            <div className="check_sub3">
                <span onClick={()=>prop.popFunction(false)}>close</span>
                <button>Add</button>
            </div>
        </form>
    </>
}
export default EditAddress