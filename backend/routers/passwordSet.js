let router=require('express').Router()
let {userModel}=require('../data_base/db.js')
let bcrypt=require('bcrypt')
let jwt=require('jsonwebtoken')



//check user.................

router.post('/check_user',async(req,res)=>{
    try 
    {
        console.log(req.body);
        let doc=await userModel.findOne({email:req.body.email})
        console.log(doc);
        if(doc)
        {
            res.json('user exist')
        }
        else
        {
            res.json('invalid credentials')
        }
    } 
    catch (error) 
    {
        res.json(error)
    }
})

// set new password......................

router.post('/new-password/:email',async(req,res)=>{
    try 
    {
        console.log(req.body);
        req.body.password=await bcrypt.hash(req.body.password,10)
        let doc=await userModel.findOneAndUpdate({email:req.params.email},{$set:{password:req.body.password}})
        res.json('password updated')
    } 
    catch (error) 
    {
        res.json(error)
    }
})





module.exports=router