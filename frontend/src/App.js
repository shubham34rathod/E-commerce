// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CartPage from './components/CartPage';
import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Page404 from './components/Page404';
import OrderSuccess from './components/OrderSuccess';
import MyOrder from './components/user/MyOrder';
import UserProfile from './components/user/UserProfile';
import ForgotPassword from './components/ForgotPassword';
import AdminProductList from './components/admin/AdminProductList';
import AdminProductFormPage from './components/admin/AdminProductFormPage';
import AdminOrders from './components/admin/AdminOrders';
import ResetPassword from './components/ResetPassword';
import StripCheckout from './components/payment/StripeCheckout';

function App() {
  return <>
      {/* <Navbar></Navbar> */}
      {/* <ProductList></ProductList> */}
      {/* <Login></Login> */}
      {/* <SignUp></SignUp> */}
      {/* <CartPage></CartPage> */}
      {/* <Checkout></Checkout> */}
      {/* <ProductDetail></ProductDetail> */}

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProductList></ProductList>}></Route>
            <Route path='/product_detail' element={<ProductDetail></ProductDetail>}></Route>
            <Route path='/cart' element={<CartPage></CartPage>}></Route>
            <Route path='/checkout' element={<Checkout></Checkout>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/sign_up' element={<SignUp></SignUp>}></Route>
            <Route path='/order_success/:state' element={<OrderSuccess></OrderSuccess>}></Route>
            <Route path='my_order' element={<MyOrder></MyOrder>}></Route>
            <Route path='/user_profile' element={<UserProfile></UserProfile>}></Route>
            <Route path='/forgot_password' element={<ForgotPassword></ForgotPassword>}></Route>
            <Route path='/reset_password' element={<ResetPassword></ResetPassword>}></Route>
            <Route path='/adminProductList' element={<AdminProductList></AdminProductList>}></Route>
            <Route path='/adminProductForm' element={<AdminProductFormPage></AdminProductFormPage>}></Route>
            <Route path='/adminOrders' element={<AdminOrders></AdminOrders>}></Route>
            <Route path='/strip_payment' element={<StripCheckout></StripCheckout>}></Route>
            <Route path='/*' element={<Page404></Page404>}></Route>          
          </Routes> 
      </BrowserRouter>
  </>;
}

export default App;
