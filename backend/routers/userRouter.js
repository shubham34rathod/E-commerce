let router=require('express').Router()
let {userModel}=require('../data_base/db.js')
let bcrypt=require('bcrypt')


//login user..................

router.post('/login',async(req,res)=>{
    try 
    {
        console.log(req.body);
        // let user=await userModel.find({email:req.body.email})
        // if(user)
        // {
        //     let checkPassword=bcrypt.compare(req.body.password,user.password)
        //     if(checkPassword)
        //     {
        //         res.json('login successfully')
        //     }
        //     else
        //     {
        //         res.json('wrong password')
        //     }
        // }
        // else
        // {
        //     res.json('user not exist')
        // }
    } 
    catch (error) 
    {
        res.json(error)
    }
})

//create user.................

router.post('/newUser',async(req,res)=>{
    try 
    {
        console.log(req.body);
        req.body.password=await bcrypt.hash(req.body.password,10)
        let doc=new userModel(req.body)
        let new_user=await doc.save()
        res.json(new_user)
    } 
    catch (error) 
    {
        res.json(error)
    }
})

//fetch user by id............

router.get('/:id',async(req,res)=>{
    try 
    {
        let id=req.params.id
        let user=await userModel.findById(id)
        let {password,userInfo}=user._doc
        res.json(userInfo)
    } 
    catch (error) 
    {
        res.json(error)
    }
})


//update user...................

router.post('/update/:id',async(req,res)=>{
    try 
    {
        let id=req.params.id
        let user=await userModel.findByIdAndUpdate(id,req.body,{new:true})
        res.json(user)
    } 
    catch (error) 
    {
        res.json(error)
    }
})

module.exports=router