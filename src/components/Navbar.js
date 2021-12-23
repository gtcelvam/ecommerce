import React,{useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {logout} from '../redux/userRedux';
import {reset} from '../redux/cartRedux';
import axios from 'axios';
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import Badge from "@material-ui/core/Badge"
import styled from 'styled-components';
import { Mobile } from '../css/responsive';

/* Styled Components */
var Nav = styled.nav``
var NavWrapper = styled.div`
    height : 5vh;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding: 0.5vw 1vw; 
    overflow:hidden;
    ${Mobile({padding:"5vw 1vw"})}
`
/* Left */
var NavLeft = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;
var Language = styled.span`
    ${Mobile({display:"none"})}
`;

var SearchContainer = styled.div`
    margin-left:10px;
    display:flex;
    align-items:center;
    border:0.5px solid lightgrey;
    padding:5px;
    ${Mobile({marginLeft:'0px'})}
`;
var NavInput = styled.input`
    font-size:1rem;
    border:none; 
    background-color:transparent;   
    &:focus{
        outline: none;
        background-color:white;
    }
    ${Mobile({fontSize:'10px',padding:'2% 1%'})}
`

/* Left Ends Here */
/* Center */
var NavCenter = styled.div`
flex:1;
`;
var NavLogo = styled.div`
margin:auto;
width:5vw;
height:auto;
cursor:pointer;
${Mobile({width:"15vw"})}
`
var NavImage = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
/* Center Ends Here */

/* Right */
var NavRight = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`;
var Admin = styled.p`font-size:1rem;margin:0`;
var linkStyle = {textDecoration:"none",color:'black'}
var MenuItem = styled.div`
    margin:0 1vw;
    cursor:pointer;
`;
/* Right Ends Here */
/* Styled Components Ends Here */

function NavBar() {
    const userName = useSelector(state => state.user.activeUser && state.user.activeUser.name);
    const quantity = useSelector(state => state.cart.quantity);
    /* Funtions*/
    const dispatch = useDispatch();
    var handleLogout = ()=>{
        dispatch(logout());
        dispatch(reset());
    }
    /* Funtions End Here */
    
    return (
        <div>
            <Nav>
                <NavWrapper>
                <NavLeft>
                    <Language>EN</Language>
                    <SearchContainer>
                        <NavInput/>
                        <Search style={{color:"gray",fontSize:16}} placeholder='Search'/>
                    </SearchContainer>
                </NavLeft>
                <NavCenter>
                    <Link to='/'>
                    <NavLogo>
                    <NavImage src='https://logodix.com/logo/1762514.png'/>
                    </NavLogo>
                    </Link>
                </NavCenter>
                <NavRight>
                { userName ? 
                <React.Fragment>
                <Admin>Welcome {userName.toUpperCase()}</Admin>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </React.Fragment> : 
                <React.Fragment>
                <Link to="/login" style={linkStyle}><MenuItem>Login</MenuItem></Link>
                <Link to="/register" style={linkStyle}><MenuItem>Register</MenuItem></Link>
                </React.Fragment>
                }
                <Link to="/cart">
                    <MenuItem>
                    <Badge badgeContent={quantity} color="primary"><ShoppingCartOutlined color="action" /></Badge>
                    </MenuItem>
                </Link>
                </NavRight>
                </NavWrapper>
            </Nav>
        </div>
    )
}

export default NavBar
