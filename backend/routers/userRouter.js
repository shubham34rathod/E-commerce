let router=require('express').Router()
let {userModel}=require('../data_base/db.js')
let bcrypt=require('bcrypt')
let jwt=require('jsonwebtoken')


//login user..................

router.post('/login',async(req,res)=>{
    try 
    {
        // console.log(req.body);
        req.body.email=req.body.email.toLowerCase()
        let user=await userModel.findOne({email:req.body.email})
        if(user)
        {
            let checkPassword=await bcrypt.compare(req.body.password,user.password)
            if(checkPassword)
            {
                let {password,...userInfo}=user._doc
                // console.log(userInfo);
                // res.cookie('jwt','badsha')
                // res.cookie('jwt','badsha',{expires:new Date(Date.now())}).json(userInfo)
                  res.json(userInfo)
            }
            else
            {
                res.json('wrong password')
            }
        }
        else
        {
            res.json('user not exist')
        }
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
        let l=Object.keys(req.body).length
        let token=await jwt.sign(req.body.name,process.env.SECRET_KET)
        console.log(token);
        Object.assign({l:{token:token}},req.body)
        // console.log(req.body);
        req.body.email=req.body.email.toLowerCase()
        req.body.password=await bcrypt.hash(req.body.password,10)
        let doc=new userModel(req.body)
        let new_user=await doc.save()
        res.json('user created')
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
        // console.log('add',id);
        let user=await userModel.findById(id)
        let {password,...userInfo}=user._doc
        // console.log('add',userInfo);
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


//update/add user address...................

router.post('/newAddress/:id',async(req,res)=>{
    try 
    {
        let id=req.params.id
        // console.log(req.body);
        let user=await userModel.findByIdAndUpdate(id,{$push:{address:req.body}},{new:true})
        res.json(user)
    } 
    catch (error) 
    {
        res.json(error)
    }
})

module.exports=router
