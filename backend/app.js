let express = require('express')
let cors = require('cors')
require('dotenv').config()
let app = express()
let nodemailer = require('nodemailer')
let productRoute = require('./routers/productRouter.js')
let brandRouter = require('./routers/brandRouter.js')
let categoryRouter = require('./routers/categoryRouter.js')
let userRouter = require('./routers/userRouter.js')
let cartRouter = require('./routers/cart.js')
let orderRouter = require('./routers/orderRouter.js')
let passwordSet=require('./routers/passwordSet')
let session = require('express-session')
let passport = require('passport')
let cookieParser = require('cookie-parser')


//! email system.............................

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    // port: 465,
    // secure: true,
    port: 587,
    secure: false,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'shubhamrathod267@gmail.com',
        pass:process.env.SECURE_PASSWORD
    }
});





// app.use(cors({exposedHeaders:['X-Total-Count']}))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/product', productRoute)
app.use('/brand', brandRouter)
app.use('/category', categoryRouter)
app.use('/user', userRouter)
app.use('/cart', cartRouter)
app.use('/order', orderRouter)
app.use('/reset-password', passwordSet)

//! mail endpoint......................

app.post('/mail',async(req,res)=>{
    let {to}=req.body
    const info = await transporter.sendMail({
        from: '"E-commerce" <dummy@example.com>', // sender address
        to:to, // list of receivers
        subject: "Reset your password", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>click <a href='http://localhost:3000/reset_password'>here</a> to reset password</b>", // html body
    });

    res.json(info)
})


app.get('/', (req, res) => {
    res.json('hello world')
})

app.listen(8000, () => { console.log('connected to 8000 port') })