let router=require('express').Router()
const { query } = require('express')
let {categoryModel}=require('../data_base/db.js')


//add category ....................

router.post('/add_category',async(req,res)=>{
    try 
    {
        // console.log(req.body);
        let category=new categoryModel(req.body)
        let newCategory=await category.save()
        res.json(newCategory)
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
        let category=await categoryModel.find()
        res.json(category)
    } 
    catch (error) 
    {
        res.json(error)
    }
})


module.exports=router