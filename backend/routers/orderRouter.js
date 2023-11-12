let router=require('express').Router()
const { query } = require('express')
let {orderModel, userModel}=require('../data_base/db.js')
let {sendEmail}=require('./emailSystem')


// fetch all order...................

router.get('/fetch-all',async(req,res)=>{
    try 
    {
        let order=await orderModel.find()
        // console.log(order);
        res.json(order)
    } 
    catch (error) 
    {
        res.json(error)
    }
})

//fetch order by user................

router.get('/fetch/:id',async(req,res)=>{
    try 
    {
        let id=req.params.id
        let order=await orderModel.find({user:id})
        // console.log(order);
        res.json(order)
    } 
    catch (error) 
    {
        res.json(error)
    }
})


//add order ....................

router.post('/new_order',async(req,res)=>{
    try 
    {
        // console.log(req.body);
        let order=new orderModel(req.body)
        let newOrder=await order.save()
        res.json(['order created',newOrder._id])

        let userInfo=await userModel.findById(newOrder.user)

        //! use nodemailer in separate function...................

        sendEmail({to:userInfo.email,newOrder})

    } 
    catch (error) 
    {
        res.json(error)
    }
})


//update order ....................

router.post('/update/:id',async(req,res)=>{
    try 
    {
        let id=req.params.id
        console.log(req.body,id);
        let order=await orderModel.findByIdAndUpdate(id,req.body)
        let newOrder=await order.save()
        res.json(newOrder)
    } 
    catch (error) 
    {
        res.json(error)
    }
})


//delete order ....................

router.get('/delete/:id',async(req,res)=>{
    try 
    {
        // console.log(req.body);
        await orderModel.findByIdAndDelete(id)
        res.json('item deleted')
    } 
    catch (error) 
    {
        res.json(error)
    }
})


module.exports=router