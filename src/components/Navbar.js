import React,{useState} from 'react';
import {Link} from "react-router-dom";
import 'styled-components';
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import Badge from "@material-ui/core/Badge"
import styled from 'styled-components';


function NavBar(props) {
    const {name} = props;
    /* Styled Components */
    var Nav = styled.nav``
    var NavWrapper = styled.div`
        height : 5vh;
        display:flex;
        justify-content:space-around;
        align-items:center;
        padding: 0.5vw 1vw; 
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
    var user = ()=>{
        
    }
    /* Styled Components Ends Here */
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
                    <NavLogo>
                    <NavImage src='https://logodix.com/logo/1762514.png'/>
                    </NavLogo>
                </NavCenter>
                <NavRight>
                { name ? 
                <React.Fragment>
                <Admin>Welcome {name.toUpperCase()}</Admin>
                <MenuItem onClick={()=>{window.location = "/"}}>Logout</MenuItem>
                </React.Fragment> : 
                <React.Fragment>
                <Link to="/login" style={linkStyle}><MenuItem>Login</MenuItem></Link>
                <Link to="/login" style={linkStyle}><MenuItem>Register</MenuItem></Link>
                </React.Fragment>
                }
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined color="action" />
                    </Badge>
                </MenuItem>
                </NavRight>
                </NavWrapper>
            </Nav>
        </div>
    )
}

export default NavBar
