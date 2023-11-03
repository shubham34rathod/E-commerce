let express=require('express')
let cors=require('cors')
require('dotenv').config()
let app=express()
let productRoute=require('./routers/productRouter.js')
let brandRouter=require('./routers/brandRouter.js')
let categoryRouter=require('./routers/categoryRouter.js')
let userRouter=require('./routers/userRouter.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/product',productRoute)
app.use('/brand',brandRouter)
app.use('/category',categoryRouter)
app.use('/user',userRouter)

app.get('/',(req,res)=>{
    res.json('hello world')
})

app.listen(8000,()=>{console.log('connected to 8000 port')})