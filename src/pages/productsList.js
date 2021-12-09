import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Mobile } from '../css/responsive';
import { useLocation } from 'react-router';

var Title = Styled.h1`
    margin:0 1%;
    font-weight:200;
    ${Mobile({fontSize:'1rem',textAlign:'center'})}
`
var FilterContainer = Styled.div`
    margin:0 1%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${Mobile({alignItems:'flex-start'})}
`
var Filter = Styled.div`
    display:flex;
    ${Mobile({flexDirection:'column'})}
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
    const [filter,setFilter] = useState({});
    const [sort,setSort] = useState('newest');
    const location = useLocation();
    const category = location.pathname.split('/')[2].toLowerCase();
    useEffect(async () => {
        var userData = JSON.parse(sessionStorage.getItem('user'));
        await setUser(userData);
    }, []);

    /* HandleChange Function */
    var handleChange = (e)=>{
        let value = e.target.value;
        setFilter({
            ...filter,
            [e.target.name]:value
        });
    }
    /* HandleChange Function Ends Here */

    return (
        <div>
            <Navbar/>
            <Annoucement/>
            <Title>{category.split('%')[0].toUpperCase()}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter By :</FilterText>
                    <Select name='color' onChange={handleChange}>
                        <Option disabled>Color</Option>
                        <Option>white</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>pink</Option>
                        <Option>green</Option>
                        <Option>red</Option>
                        <Option>orange</Option>
                    </Select>
                    <Select name='size' onChange={handleChange}>
                        <Option disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort By :</FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value='newest'>Newest</Option>
                        <Option value='asc'>Price (asc)</Option>
                        <Option value='desc'>Prince (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={category} filter={filter} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Product
