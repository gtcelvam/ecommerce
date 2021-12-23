import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import {Provider,useSelector} from 'react-redux';
import {store} from './redux/store';
import App from './app';
import Login from './pages/login';
import Register from './pages/register';
import ProductList from './pages/productsList';
import Product from './pages/product';
import Cart from './pages/cart';
import './css/index.css'

function Index() {
    var user = useSelector(state => state.user.activeUser);
    return(
       <Router>
       <Routes>
        <Route path="/" exact element={<App/>} />
       </Routes>
       <Routes>
        <Route path="/login" element={user ? <Navigate to='/'/> : <Login/>}/>
       </Routes>
       <Routes>
        <Route path="/register" element={<Register/>} />
       </Routes>
       <Routes>
        <Route path="/productlist/:category" element={<ProductList/>} />
       </Routes>
       <Routes>
        <Route path="/product/:id" element={<Product/>} />
       </Routes>
       <Routes>
           <Route path="/cart" element={<Cart/>}/>
       </Routes>
       </Router>
    );
}

var root = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <Index/>
</Provider>,root);