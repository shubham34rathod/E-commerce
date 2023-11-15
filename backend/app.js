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
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }))

app.use(cors())

// app.use(express.static('./build'))
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


//! payment.....................

// This is your test secret API key.
const stripe = require("stripe")('sk_test_51OCG1cSBFoZu0GfcjFtZEHXfNjNpkNVmO971lIdTJVHmTIp4VZtv5clYGXEnXwsPQ4D1unpaNNfE8a8hcoYq4rwD0055cHsHXe');


const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "inr",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  console.log('payment',paymentIntent.client_secret);
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});


// app.listen(4242, () => console.log("Node server listening on port 4242!"));


app.get('/', (req, res) => {
    res.json('hello world')
})

app.listen(8000, () => { console.log('connected to 8000 port') })