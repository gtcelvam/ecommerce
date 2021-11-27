import React,{useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import Badge from "@material-ui/core/Badge"
import styled from 'styled-components';

/* Styled Components */
var Nav = styled.nav``
var NavWrapper = styled.div`
    height : 5vh;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding: 0.5vw 1vw; 
    overflow:hidden;
`
/* Left */
var NavLeft = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;
var Language = styled.span``;

var SearchContainer = styled.div`
    margin-left:10px;
    display:flex;
    align-items:center;
    border:0.5px solid lightgrey;
    padding:5px;
`;
var NavInput = styled.input`
    font-size:1vw;
    border:none;    
    &:focus{
        outline: none;
    }
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
var handleLogout = ()=>{
    sessionStorage.removeItem('user');
    window.location = "/"
}
/* Styled Components Ends Here */

function NavBar(props) {
    const {name} = props;
    const [user, setUser] = useState({});
    useEffect(async () => {
        var userData = JSON.parse(sessionStorage.getItem('user'));
        return name ? await setUser(name) : userData ? await setUser(userData) : null;
    }, [])
    return (
        <div>
            <Nav>
                <NavWrapper>
                <NavLeft>
                    <Language>EN</Language>
                    <SearchContainer>
                        <NavInput/>
                        <Search style={{color:"gray",fontSize:16}}/>
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
                { Object.keys(user).length > 0 ? 
                <React.Fragment>
                <Admin>Welcome {user.name.toUpperCase()}</Admin>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </React.Fragment> : 
                <React.Fragment>
                <Link to="/login" style={linkStyle}><MenuItem>Login</MenuItem></Link>
                <Link to="/register" style={linkStyle}><MenuItem>Register</MenuItem></Link>
                </React.Fragment>
                }
                <Link to="/cart">
                    <MenuItem>
                    <Badge badgeContent={4} color="primary"><ShoppingCartOutlined color="action" /></Badge>
                    </MenuItem>
                </Link>
                </NavRight>
                </NavWrapper>
            </Nav>
        </div>
    )
}

export default NavBar
