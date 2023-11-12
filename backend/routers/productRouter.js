let router=require('express').Router()
const { query } = require('express')
let {productModel}=require('../data_base/db.js')

//create product ....................

router.post('/new_product',async(req,res)=>{
    try 
    {
        console.log(req.body);
        let product=new productModel(req.body)
        let new_product=await product.save()
        res.json(new_product)
    } 
    catch (error) 
    {
        res.json(error)
    }
})

//fetch all products........................

router.get('/get_products',async(req,res)=>{
    try 
    {
        // let products=await productModel.find()
        // console.log(req.query);
        let count=await productModel.find({}).count()
        let page=parseInt(req.query._page)
        let products=await productModel.find({}).skip(16*(page-1)).limit(16)
        if(req.query.category)
        {
            products=await productModel.find({category:req.query.category}).skip(16*(page-1)).limit(16)
            count=products.length
            // products=products.find({category:{$in:req.query}})
        }
        if(req.query.brand)
        {
            products=await productModel.find({brand:req.query.brand}).skip(16*(page-1)).limit(16)
            count=products.length
            // products=products.find({brand:req.query.brand})
        }
        if(req.query.category && req.query.brand)
        {
            products=await productModel.find({category:req.query.category,brand:req.query.brand}).skip(16*(page-1)).limit(16).sort()
            count=products.length
            // products=products.find({category:req.query.category})
        }
        if(req.query._sort && req.query._order)
        {
            products=await productModel.find().sort({[req.query._sort]:req.query._order})
            // products=products.sort({[req.query._sort]:req.query._order})
        }
        if(req.query._page && req.query._limit)
        {
            let pageSize=req.query._limit;
            let page=req.query._page
            products=await productModel.find().skip(pageSize*(page-1)).limit(pageSize)
            // products=products.find().skip(pageSize*(page-1)).limit(pageSize)
        }
        res.status(200).json([products,count])
    } 
    catch (error) 
    {
        res.json(error)
    }
})


// fetch product by id.....................................

router.get('/fetchProduct_byID/:id',async(req,res)=>{
    try 
    {
        let id=req.params.id
        let product=await productModel.findById(id)
        res.json(product)
    } 
    catch (error) 
    {
        res.json(error)
    }
})


//update product.........................

router.patch('/updateProduct/:id',async(req,res)=>{
    try 
    {
        let id=req.params.id
        await productModel.findByIdAndUpdate(id,req.body,{new:true})
        res.json('product updated successfully')
    } 
    catch (error) 
    {
        res.json(error)
    }
})

module.exports=router