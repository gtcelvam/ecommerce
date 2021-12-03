import React from 'react';
import Styled from 'styled-components';
import {Facebook,Instagram,Twitter,Pinterest,Room,Phone,MailOutlineOutlined} from '@material-ui/icons';
import { Mobile } from '../css/responsive';

var Container = Styled.div`
    display:flex;
    ${Mobile({flexDirection:'column'})}
`;
var Left = Styled.div`
    flex:1;
    padding:1%;
`;
var Center = Styled.div`
    flex:1;
    padding:1%;
    ${Mobile({display:'none'})}
`;
var Right = Styled.div`
    flex:1;
    padding:1%;
`;

/* Left */
var Head = Styled.div`
    display:flex;
    ${Mobile({justifyContent:'space-around',alignItems:'center'})}
`

var LogoContainer = Styled.div`
    width:6vh;
    height:6vh;
`;

var Title = Styled.h1`
    margin:0 1%;
    ${Mobile({fontSize:'1rem'})}
    font-weight:500;
`

var Logo = Styled.img`
    width:100%;
    height:100%;
`;
var Desc = Styled.p`
    margin:2% 0;
    ${Mobile({fontSize:'0.5rem',textAlign:'center'})}
`;
var SocialContainer = Styled.div`
    display:flex;
    ${Mobile({justifyContent:'center'})}
`;
var SocialIcon = Styled.div`
    margin-right:2%;
    width:2vw;
    height:2vw;
    color:white;
    background-color:${props=>props.color};
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    ${Mobile({width:'10vw',height:'10vw'})}
`
/* Left Ends Here */

/* Center */
var LinkTitle = Styled.h1`   
    font-weight:200;
`;

var List = Styled.ul`
        margin:2% 0;
        margin:0;
        padding:0;
        list-style:none;
        display:flex;
        flex-wrap:wrap;
`;

var ListItems = Styled.li`
    width:50%;
    margin:0.5% 0;
`
/* Center Ends Here */

/* Right */
var ContactTitle = Styled.h1`
    ${Mobile({fontSize:'1rem',textAlign:'center'})}
`;

var ContactItem = Styled.div`;
    margin:1% 0;
    display:flex;
    align-items:center;
    padding:1% 0;
    ${Mobile({fontSize:'0.8rem',display:'flex',justifyContent:'center'})}
`;

var Payment = Styled.img`
    width:50%;
    ${Mobile({width:'100%'})}
`
/* Right Ends Here */

function Footer() {
    return (
        <Container>
            <Left>
                <Head><LogoContainer><Logo src='https://logodix.com/logo/1762482.png'/></LogoContainer><Title>Ts Shop.</Title></Head>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor erat dictum, euismod quam ut, rutrum urna. Praesent rutrum placerat velit et imperdiet. Fusce tempor erat in lobortis eleifend. Donec sit amet fermentum ante. Sed quis tellus sed sapien molestie ultrices ac et nulla. Pellentesque tincidunt nulla a enim pretium.</Desc>
                <SocialContainer>
                    <SocialIcon color='#4267B2'><Facebook/></SocialIcon>
                    <SocialIcon color='#F798FF'><Instagram/></SocialIcon>
                    <SocialIcon color='#1DA1F2'><Twitter/></SocialIcon>
                    <SocialIcon color='#E60023'><Pinterest/></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <LinkTitle>Useful Links</LinkTitle>
                <List>
                    <ListItems>Home</ListItems>
                    <ListItems>Cart</ListItems>
                    <ListItems>Men Fashion</ListItems>
                    <ListItems>Women Fashion</ListItems>
                    <ListItems>Accessories</ListItems>
                    <ListItems>My Account</ListItems>
                    <ListItems>Order Tracking</ListItems>
                    <ListItems>Wishlist</ListItems>
                    <ListItems>Terms & Conditions</ListItems>
                </List>
            </Center>
            <Right>
                <ContactTitle>Contact</ContactTitle>
                <ContactItem><Room style={{marginRight:'10px'}}/> Chennai,Tamilnadu</ContactItem>
                <ContactItem><Phone style={{marginRight:'10px'}}/> +919489029654</ContactItem>
                <ContactItem><MailOutlineOutlined style={{marginRight:'10px'}}/> gtcelan@gmail.com</ContactItem>
                <Payment src='https://www.flyislandwings.com/ContentImages/termsandconditions.png'/>
            </Right>
        </Container>
    )
}

export default Footer;
