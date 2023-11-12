let router=require('express').Router()
let {cartModel, productModel}=require('../data_base/db.js')

//fetch cart by user..............

router.get('/get/:id',async(req,res)=>{
    try 
    {
        let id=req.params.id
        let data=await cartModel.find({userId:id})
        // console.log(data);
        res.json(data)
    } 
    catch (error) 
    {
        res.json(error)
    }
})


//add to cart....................

router.post('/addToCart/:id',async(req,res)=>{
    try 
    {
        console.log(req.params);
        // let doc=new cartModel(req.body)
        let productData=await productModel.findById(req.body.productId)
        let {rating,category,images,...otherData}=productData._doc
        // console.log(otherData);
        let doc=new cartModel({
            productId:req.body.productId,
            userId:req.params.id,
            // userId:req.body.userId,
            title:otherData.title,
            description:otherData.description,
            price:otherData.price,
            stock:otherData.stock,
            thumbnail:otherData.thumbnail
        })
        let new_item=await doc.save()
        // res.json(new_item)
        res.json('added to cart')
    } 
    catch (error) 
    {
        res.json(error)
    }
})


//update from cart..........................

router.post('/update/:id',async(req,res)=>{
    try 
    {
        let id=req.params.id
        console.log(id);
        console.log(req.body);
        await cartModel.findByIdAndUpdate(id,req.body)
        res.json('item updated')
    } 
    catch (error) 
    {
        res.json(error)
    }
})


//delete from cart..........................

router.get('/delete/:id',async(req,res)=>{
    try 
    {
        let id=req.params.id
        console.log(id);
        await cartModel.findByIdAndDelete(id)
        res.json('item deleted')
    } 
    catch (error) 
    {
        res.json(error)
    }
})

module.exports=router