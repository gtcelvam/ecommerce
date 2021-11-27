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

var Container = Styled.div``;

var Wrapper = Styled.div`
    padding:1%;
`;

var Title = Styled.h1`
    font-weight:300;
    text-align:center;
`;

var Top = Styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1%;
`;

var TopButton = Styled.button`
    padding:10px;
    cursor:pointer;
    font-weight:600;
    border: ${props=>props.type === 'filled' ? 'none' : '1px solid black'};
    background-color:${props=>props.type === 'filled' ? 'black' : 'transparent'};
    color:${props=>props.type === 'filled' && 'white'};
`

var TopTexts = Styled.div``

var TopText = Styled.span`
    text-decoration : underline;
    cursor:pointer;
    margin:0 1%;
    white-space:nowrap;
`


var Bottom = Styled.div`
    display:flex;
    justify-content:space-between;
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
`;

var ProductDetail = Styled.div`
    flex:2;
    display:flex;
`;

var Image = Styled.img`
    width:7vw;
`;

var Detail = Styled.div`
    padding:1%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

var ProductName = Styled.span``;

var ProductId = Styled.span``;

var ProductColor = Styled.div`
    width:1.5vw;
    height:1.5vw;
    border-radius:50%;
    background-color:${props=>props.color};
`;

var ProductSize = Styled.span``;

var PriceDetail = Styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

var PriceAmountContainer = Styled.div`
    display:flex;
    align-items:center;
    margin-bottom:1%;
`;

var ProductAmount = Styled.div`
    font-size:1.5vw;
    margin:0 1%;
`;

var ProductPrice = Styled.div`
    font-size:2vw;
    font-weight:500;
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

var SummaryItemText = Styled.span``;

var SummaryItemPrice = Styled.span``;

var SummaryButton = Styled.button`
    width:100%;
    padding:1%;
    background-color:black;
    color:white;
    border:none;
    font-weight:600;
`;

function Cart({data}) {
    const [user,setUser] = useState({});
    const [cart,setCart] = useState([]);
    const [product,setProduct] = useState([]);
    useEffect(async () => {
        var userData = JSON.parse(sessionStorage.getItem('user'));
        await setUser(userData);
    }, []);
    useEffect(async ()=>{
        if(user !== null){
            await axios.get(`https://thselvan1.herokuapp.com/api/cart/find/${user._id}`).then(res=>{
            var products = res.data;
            if(products){
                var productId = products.products[0].productId;
                var productCount = products.products[0].quantity;
                setCart({
                    id : productId,
                    count : productCount
                });
            }
        });
        }
    },[user]);

    useEffect(async ()=>{
        if(cart !== null){
            var url = `https://thselvan1.herokuapp.com/api/product/${cart.id}`;
            await axios.get(url).then((res)=>{
                setProduct(res.data);
            })  
        }
    },[cart]);

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
                <Product>
                <ProductDetail>
                    <Image src={product.img}/>
                    <Detail>
                        <ProductName><b>Title :</b> {product.title}</ProductName>
                        <ProductId><b>ID :</b> {product._id}</ProductId>
                        <ProductColor color={product.color}/>
                        <ProductSize><b>Size :</b> XL</ProductSize>
                    </Detail>
                </ProductDetail>
                <PriceDetail>
                    <PriceAmountContainer>
                        <Remove/>
                        <ProductAmount>{cart.count}</ProductAmount>
                        <Add/>
                    </PriceAmountContainer>
                    <ProductPrice>
                    &#8377;  {product.price}
                    </ProductPrice>
                </PriceDetail>
                </Product>
                <Hr/>
                {/* --------- */}
            </Info>
            <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>&#8377; {product.price}</SummaryItemPrice>
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
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>&#8377; {product.price + 50}</SummaryItemPrice>
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
