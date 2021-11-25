import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";

var Container = Styled.div``;

var Wrapper = Styled.div`
    padding:5%;
    display:flex;
`;

var ImgContainer = Styled.div`
    flex:1;
`;

var Image = Styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
`;

var InfoContainer = Styled.div`
    flex:1;
    padding:0 5%;
`;

var Title = Styled.h1`
    font-weight: 200;
`;

var Desc = Styled.p`
    margin:2% 0;
`;

var Price = Styled.span`
    font-size:1.5vw;
    font-weight:100;
`;

var FilterContainer = Styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
var Filter = Styled.div`
    display:flex;
    align-items:center;
`

var FilterTitle = Styled.p`
    font-size:1vw;
    margin-bottom:0;
    margin-right:1vw;
`
var FilterColor = Styled.span`
    margin:0 1%;
    width:1.5vw;
    height:1.5vw;
    border-radius:50%;
    background-color:${props=>props.bg};
    cursor:pointer;
`

var FilterSize = Styled.select`

`

var FilterSizeOption = Styled.option`

`

function Product() {
    const [data, setData] = useState([])
    var productLink = useParams();
    useEffect(async ()=>{
        var url = `https://thselvan1.herokuapp.com/api/product/${productLink.id}`;
        await axios.get(url).then((res)=>{
            setData(res.data);
        })
    },[]);
    return (
        <Container>
            <Navbar/>
            <Annoucement/>
            <Wrapper>
            <ImgContainer>
            <Image src={data.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{data.title}</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor erat dictum, euismod quam ut, rutrum urna. Praesent rutrum placerat velit et imperdiet. Fusce tempor erat in lobortis eleifend. Donec sit amet fermentum ante. Sed quis tellus sed sapien molestie ultrices ac et nulla. Pellentesque tincidunt nulla a enim pretium.</Desc>
                <Price>&#8377; {data.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor bg='#000000'/>
                        <FilterColor bg='#1A008F'/>
                        <FilterColor bg='#A9A9A9'/>
                    </Filter>
                    <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                    </Filter>
                </FilterContainer>
            </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
