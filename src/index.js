import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './app';
import Login from './pages/login';
import Register from './pages/register';
import ProductList from './pages/productsList';
import Product from './pages/product';
import Cart from './pages/cart';
import './css/index.css'

function Index() {
    const [data, setData] = useState({})
    var userData = (data)=>{
        setData(data);
    }
    return(
       <Router>
       <Routes>
        <Route path="/" exact element={<App data={data}/>} />
       </Routes>
       <Routes>
        <Route path="/login" element={<Login userData={userData}/>} />
       </Routes>
       <Routes>
        <Route path="/register" element={<Register/>} />
       </Routes>
       <Routes>
        <Route path="/productlist/:category" element={<ProductList data={data}/>} />
       </Routes>
       <Routes>
        <Route path="/product/:id" element={<Product data={data}/>} />
       </Routes>
       <Routes>
           <Route path="/cart" element={<Cart data={data}/>}/>
       </Routes>
       </Router>
    );
}

var root = document.getElementById('root');
ReactDOM.render(<Provider store={store}><Index/></Provider>,root);