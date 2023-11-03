let mongoose=require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_URL+process.env.DB_NAME)
.then(()=>console.log('connected to db'))
.catch(()=>console.log('connection error'))

//user schema...............................................

let userSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,required:true,default:'user'},
    address:{type:[mongoose.Schema.Types.Mixed]},
    name:{type:String},
    order:{type:[mongoose.Schema.Types.Mixed]}
})

let userModel=mongoose.model('user',userSchema)

//product schema.............................................

let productSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,min:[1,'wrong min price']},
    discountPercentage:{type:Number,min:[1,'wrong min discount'],max:[99,'wrong max discount']},
    rating:{type:Number,min:[0,'wrong min rating'],max:[5,'wrong max rating'],default:0},
    stock:{type:Number,min:[0,'wrong min stock'],default:0},
    brand:{type:String,required:true},
    category:{type:String,required:true},
    thumbnail:{type:String,required:true},
    images:{type:[String],required:true},
    deleted:{type:Boolean,default:false},
},{timestamps:true})

let productModel=mongoose.model('product',productSchema )


//cart schema.............................................

let cartSchema=new mongoose.Schema({
    quantity:{type:Number,required:true},
    productId:{type:mongoose.Schema.Types.ObjectId,ref:'productModel',required:true},
    // productId:{type:String,required:true},
    userId:{type:String,required:true},
},{timestamps:true})

let cartModel=mongoose.model('cart',productSchema )



//category schema............................................

let categorySchema=new mongoose.Schema({
    label:{type:String,required:true,unique:true},
    value:{type:String,required:true,unique:true},
})

let categoryModel=mongoose.model('category',categorySchema)


//brand schema............................................

let brandSchema=new mongoose.Schema({
    label:{type:String,required:true,unique:true},
    value:{type:String,required:true,unique:true},
})

let brandModel=mongoose.model('brand',brandSchema)


module.exports={productModel,categoryModel,brandModel,userModel,cartModel}