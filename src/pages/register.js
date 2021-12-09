import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
/* import {Button} from '@material-ui/core'; */
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import '../css/login.css';
import { Mobile } from '../css/responsive';
    var AlertContainer = styled.div`
        display:flex;
        flex-direction:column;
    `

    var FormContainer = styled.div`
        margin:auto;
        width:25%;
        height:50vh;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius:10px;
        ${Mobile({width:"100%",padding:'5% 0',minHeight:'60vh'})}
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

    var Container = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
    `

    var Label = styled.label`
        font-size:1rem;
        display:flex;
        flex-direction:column;
        margin:5px 0;
        width:100%;
    `
    var Input = styled.input`
        padding-left:1%;
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

function Register() {
    const [alertData,setAlert] = useState({
       alertType : '',
       message : '' 
    });
    useEffect(() => {
        var alertContainer = document.querySelector(".alert-container");
        alertData.alertType !== '' ? alertContainer.style.display = 'block' : alertContainer.style.display = "none";
    }, [alertData.alertType])
    /* Function Part */
    var alertFunc = (message)=>{
        var success = ()=>{
            setAlert({
                alertType : 'alert alert-success',
                message : 'Sucessfully Registerd.Redirecting to login..'
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
    var handleRegister = ()=>{
        var form = document.getElementById('register-form');
        var name = document.getElementById("name").value;
        var email = document.getElementById("email");
        var password = document.getElementById("password").value;
        var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name === "" || password === '' || email.value === ''){
            alert("No Value should be Empty!");
            return;
        }
        if (!filter.test(email.value)) {
            alert('Please provide a valid email address');
            email.focus();
            return;
        }
        var registerData = {
            name : name,
            email:email.value,
            password : password
        }
        axios.post('https://thselvan1.herokuapp.com/api/auth/register',registerData).then(res=>{
            try {
                alertFunc(true);
                var inputTags = form.querySelectorAll('input');
                inputTags.forEach(item=>{
                    item.value = "";
                })
                navigate('/login');
            } catch (error) {
                console.log(error);
            }
        })
        
    }
    /* Function Part End Here*/
    return (
        <div className='container-fluid'>
            <Navbar/>
            <AlertContainer className='alert-container'>
                <div class={alertData.alertType} role="alert">
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
                <form method='POST' id='register-form'>
                    <Container>
                    <Label><span>Username</span><Input id='name' placeholder='Name' required/></Label>
                    <Label><span>Email</span><Input id='email' placeholder='Email Address' type='email' required/></Label>
                    <Label><span>Password</span><Input id='password' placeholder='Password' type='password' required/></Label>
                    <div>
                    <Button onClick={handleRegister}>Sign Up Now!</Button>
                    </div>
                    </Container>
                </form>
                </FormBody>
            </FormContainer>
        </div>
    )
}

export default Register
