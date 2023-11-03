let router=require('express').Router()
let {cartModel}=require('../data_base/db.js')

//fetch cart by user..............

router.get('/get/:id',async(req,res)=>{
    try 
    {
        let id=req.params.id
        let data=await cartModel.findById(id)
        res.json(data)
    } 
    catch (error) 
    {
        res.json(error)
    }
})


//add to cart....................

router.post('/addToCart',async(req,res)=>{
    try 
    {
        let doc=new cartModel(req.body)
        let new_item=await doc.save()
        res.json(new_item)
    } 
    catch (error) 
    {
        res.json(error)
    }
})