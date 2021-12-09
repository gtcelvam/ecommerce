import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
/* import {Button} from '@material-ui/core'; */
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import '../css/login.css';
import { Mobile } from '../css/responsive';

var Container = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
    `
    var AlertContainer = styled.div`
        display:flex;
        flex-direction:column;
    `

    var FormContainer = styled.div`
        margin:auto;
        width:25%;
        padding:1% 0;
        max-height:50vh;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius:10px;
        ${Mobile({width:"100%",padding:'5% 0'})}
    `

    var FormHead = styled.div`
        height:20%;
        display:flex;
        justify-content:center;
        align-items:center
    `

    var LogoContainer = styled.div`
            width:5rem;
            height:5rem;
            padding:10px;
    `

    var LogoImage = styled.img`
            width:100%;
            height:100%;
    `

    var FormBody = styled.div`
        display:flex;
        height:80%;
        flex-direction:column;
    `;

    var Label = styled.label`
        font-size:1rem;
        display:flex;
        flex-direction:column;
        margin:5px 0;
    `
    var Input = styled.input`
        font-size:1.4rem;
        background-color: rgba(255, 255, 255, 0.5);
        border-width:0 0 1px 0;
        border-color:white;
        ${Mobile({padding:'1%',borderRadius:'5px'})}
        &:focus{
            outline:none;
            background-color:white;
        }
        &::placeholder{
            font-size:0.8vw;
            ${Mobile({fontSize:'1rem'})}
        }
        
    `
    var Button = styled.button`
        width:100%;
        padding:2% 5vw;
        background-color:black;
        color:white;
        font-weight:600;
        border:none;
        ${Mobile({padding:'2% 10vw'})}
    `

function Login(props) {
    const {userData} = props;
    const [data, setData] = useState({});
    const [alertData,setAlert] = useState({
       alertType : '',
       message : '' 
    });
    useEffect(() => {
        var alertContainer = document.querySelector(".alert-container");
        alertData.alertType !== '' ? alertContainer.style.display = 'block' : alertContainer.style.display = "none";
    }, [alertData.alertType])
    useEffect(()=>{
        userData(data);
    },[data])
    

    /* Function Part */
    var alertFunc = (message)=>{
        var success = ()=>{
            setAlert({
                alertType : 'alert alert-success',
                message : 'Sucessfully Logged In'
            })
        }
        var failure = ()=>{
            setAlert({
                alertType : 'alert alert-danger',
                message : 'Name or Email is wrong'
            })
        }
        message = true ? success() :  failure() ;
        setTimeout(()=>{
            setAlert({
                alertType : '',
                message : ''
            })
        },3000)
    }
    var navigate = useNavigate();
    var handleLogin = (e)=>{
        e.preventDefault();
        var name = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        if(name !== "" || password !== ''){
            var loginData = {
                name : name,
                password : password
            }
            axios.post('https://thselvan1.herokuapp.com/api/auth/login',loginData).then(res=>{
                try {
                    alertFunc(true);
                    setData(res.data);
                    navigate('/');
                    sessionStorage.setItem('user',JSON.stringify(res.data));
                } catch (error) {
                    
                }
            })
        }else{
            return alert("No Value should be Empty!");
        }
    }



    /* var getAllUser = ()=>{
        axios.get('https://thselvan1.herokuapp.com/api/user',{headers: {
            'Content-Type': 'application/json',
            'token' : `bearer ${data.accesstoken}`
            }}).then(res=>{
            console.log(res.data);
        });
    } */
    /* Function Part End Here*/
    return (
        <div className='container-fluid'>
            <Navbar/>
            <AlertContainer className='alert-container'>
                <div className={alertData.alertType} role="alert">
                {alertData.message}
                </div>
            </AlertContainer>
            <FormContainer>
                <FormHead>
                    <LogoContainer>
                    <LogoImage src='https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png'/>
                    </LogoContainer>
                </FormHead>
                <FormBody>
                <form method='POST'>
                    <Container>
                    <Label><span>Username</span><Input id='name' placeholder='Username'/></Label>
                    <Label><span>Password</span><Input id='password' placeholder='Password' type='password'/></Label>
                    <div>
                    <Button variant="outlined" color="primary" onClick={handleLogin}>Log in</Button>
                    </div>
                    </Container>
                </form>
                </FormBody>
            </FormContainer>
        </div>
    )
}

export default Login
