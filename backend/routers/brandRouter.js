let router=require('express').Router()
const { query } = require('express')
let {brandModel}=require('../data_base/db.js')


//create brand ....................

router.post('/add_brand',async(req,res)=>{
    try 
    {
        // console.log(req.body);
        let brand=new brandModel(req.body)
        let newBrand=await brand.save()
        res.json(newBrand)
    } 
    catch (error) 
    {
        res.json(error)
    }
})


//fetch all brand ....................

router.get('/',async(req,res)=>{
    try 
    {
        // console.log(req.body);
        let brand=await brandModel.find()
        res.json(brand)
    } 
    catch (error) 
    {
        res.json(error)
    }
})


module.exports=router