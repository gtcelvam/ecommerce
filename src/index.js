import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import App from './app';
import Login from './pages/login';
import './css/index.css'

function Index() {
    const [data, setData] = useState({})
    var userData = (data)=>{
        setData(data);
    }
    return(
       <Router>
       <Routes>
        <Route path="/" element={<App data={data}/>} />
       </Routes>
       <Routes>
        <Route path="/login" element={<Login userData={userData}/>} />
       </Routes>
       </Router>
    );
}

var root = document.getElementById('root');
ReactDOM.render(<Index/>,root);