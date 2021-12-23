import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from '@material-ui/icons';
import { CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Mobile } from '../css/responsive';
import { useSelector } from 'react-redux';

var Container = Styled.div``;

var Wrapper = Styled.div`
    padding:1%;
`;

var Title = Styled.h1`
    font-weight:300;
    text-align:center;
    ${Mobile({fontSize:'small'})}
`;

var Top = Styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1%;
    ${Mobile({flexDirection:'column'})}
`;

var TopButton = Styled.button`
    padding:10px;
    cursor:pointer;
    font-weight:600;
    border: ${props=>props.type === 'filled' ? 'none' : '1px solid black'};
    background-color:${props=>props.type === 'filled' ? 'black' : 'transparent'};
    color:${props=>props.type === 'filled' && 'white'};
    ${Mobile({padding:'5px 10px'})}
`

var TopTexts = Styled.div`
    ${Mobile({display:'flex',width:'100%',justifyContent:'space-between'})}
`

var TopText = Styled.span`
    text-decoration : underline;
    cursor:pointer;
    margin:0 1%;
    white-space:nowrap;
`


var Bottom = Styled.div`
    display:flex;
    justify-content:space-between;
    ${Mobile({flexDirection:'column'})}
`;
var Info = Styled.div`
    flex:3;
`;
var Summary = Styled.div`
    flex:1;
    margin-left:1%;
    border:0.5px solid lightgrey;
    border-radius:10px;
    padding:1%;
    height:50vh;
`
var Product = Styled.div`
    display:flex;
    justify-content:space-between;
    ${Mobile({flexDirection:'column'})}
`;

var ProductDetail = Styled.div`
    flex:2;
    display:flex;
    ${Mobile({justifyContent:'space-between'})}
`;

var Image = Styled.img`
    width:7vw;
    ${Mobile({flex:'1',width:'8vw'})}
`;

var Detail = Styled.div`
    padding:1%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    ${Mobile({fontSize:'4vw',justifyContent:'center'})}
`;

var ProductName = Styled.span``;

var ProductId = Styled.span``;

var ProductColor = Styled.div`
    width:1.5vw;
    height:1.5vw;
    border-radius:50%;
    background-color:${props=>props.color};
    ${Mobile({width:'5vw',height:'5vw'})}
`;

var ProductSize = Styled.span``;

var PriceDetail = Styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    ${Mobile({flexDirection:'row',justifyContent:'space-between',padding:'0 10px'})}
`;

var PriceAmountContainer = Styled.div`
    display:flex;
    align-items:center;
    margin-bottom:1%;
`;

var ProductAmount = Styled.div`
    font-size:1.5vw;
    margin:0 1%;
    ${Mobile({fontSize:'5vw'})}
`;

var ProductPrice = Styled.div`
    font-size:2vw;
    font-weight:500;
    ${Mobile({fontSize:'5vw'})}
`;

var Hr = Styled.hr`
    background-color:#A7A7A7;
    border:none;
    height:1px;
`

var SummaryTitle = Styled.h1`
    font-weight:100;
`

var SummaryItem = Styled.div`
    margin:7% 2%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-weight:${props=>props.type === "total" && "500"};
    font-size:${props=>props.type === "total" && "2vw"};
`;

var SummaryItemText = Styled.span`
${Mobile({fontSize:'5vw'})}
`;

var SummaryItemPrice = Styled.span`
${Mobile({fontSize:'5vw'})}
`;

var SummaryButton = Styled.button`
    width:100%;
    padding:1%;
    background-color:black;
    color:white;
    border:none;
    font-weight:600;
`;

function Cart({data}) {
    const [amount,setAmount] = useState(0);
    const user = useSelector(state=>state.user.activeUser);
    const cart = useSelector(state=>state.cart);
    useEffect(async ()=>{
        if(user !== null){
            console.log(product);
        }
    },[user]);
    const product = cart && cart.product;
    const total = cart && cart.total;
    var getCartData = product !== null && product.map((item,index)=>{
        item = item[0];
        return <React.Fragment key={item._id}>
                <Product>
                <ProductDetail>
                    <Image src={item.img}/>
                    <Detail>
                        <ProductName><b>Title :</b> {item.title}</ProductName>
                        <ProductId><b>ID :</b> {item._id}</ProductId>
                        <ProductColor color={item.color}/>
                        <ProductSize><b>Size :</b> {item.size}</ProductSize>
                    </Detail>
                </ProductDetail>
                <PriceDetail>
                    <PriceAmountContainer>
                        <Remove/>
                        <ProductAmount>{item.quantity}</ProductAmount>
                        <Add/>
                    </PriceAmountContainer>
                    <ProductPrice>
                    &#8377;  {item.price * item.quantity}
                    </ProductPrice>
                </PriceDetail>
                </Product>
                <Hr/>
                {/* --------- */}
        </React.Fragment>
    })

    var main = user !== null ? (<Wrapper>
        <Title>Your Cart</Title>
        <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
                <TopText>Shopping Bag({product.length})</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type='filled'>Checkout Now</TopButton>
        </Top>
        <Bottom>
        <Info>
        {getCartData}
        </Info>
        <Summary>
        <SummaryTitle>Order Summary</SummaryTitle>
        <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>&#8377; {total}</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>&#8377; 55.90</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>&#8377; -45.90</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem type='total'>
            <SummaryItemText style={{fontWeight:'600'}}>Total</SummaryItemText>
            <SummaryItemPrice style={{fontWeight:'600'}}>&#8377; {total + 50}</SummaryItemPrice>
        </SummaryItem>
        <SummaryButton>CheckOut Now</SummaryButton>
    </Summary>
    </Bottom>
    </Wrapper>) : (<Wrapper><p style={{textAlign:"center"}}>You can <Link to='/login'>Login here</Link> to see your products</p></Wrapper>);

    return (
        <Container>
            <Navbar/>
            <Annoucement/>
            {main}
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Cart
