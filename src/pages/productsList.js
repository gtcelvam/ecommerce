import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

var Title = Styled.h1`
    margin:0 1%;
    font-weight:200;
`
var FilterContainer = Styled.div`
    margin:0 1%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
var Filter = Styled.div`
    display:flex;
`
var FilterText = Styled.span`
    font-weight:600;
    white-space:nowrap;
    margin-right:1%;
`

var Select = Styled.select`
    padding:0 1%;
    margin-right:1%;
`
var Option = Styled.option``;

function Product({data}) {
    const [user,setUser] = useState([]);
    useEffect(()=>{
        setUser(data);
    },[]);
    return (
        <div>
            <Navbar name={user.name ? user.name : null}/>
            <Annoucement/>
            <Title>Products List</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter By :</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Pink</Option>
                        <Option>Green</Option>
                        <Option>Red</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort By :</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Prince (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Product
