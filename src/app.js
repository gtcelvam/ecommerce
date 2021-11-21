import React,{useState} from 'react';
import axios from 'axios';
import NavBar from './components/Navbar';
import { Button, MenuItem } from '@material-ui/core';


function App() {
    const [data, setData] = useState({});
    
    var handleLogin = ()=>{
        axios.post('https://thselvan1.herokuapp.com/api/auth/login',{name : "thselvan",password:"gtcelvaM@2005"}).then(res=>{
        try {
            setData(res.data)
        } catch (error) {
           console.log(error);
        }
        })
    }
    var getAllUser = ()=>{
        axios.get('https://thselvan1.herokuapp.com/api/user',{headers: {
            'Content-Type': 'application/json',
            'token' : `bearer ${data.accesstoken}`
            }}).then(res=>{
            console.log(res.data);
        });
    }
    return (
        <div>
            <NavBar/>
            <p>{Object.keys(data).length > 0 ? "Logged In" : null}</p>
            <Button variant="outlined" color="primary" onClick={handleLogin}>Log in</Button>
            <Button variant="contained" color="success"  onClick={getAllUser}>Get All User</Button>
        </div>
    )
}

export default App
