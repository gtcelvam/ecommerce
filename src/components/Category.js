import React,{useEffect, useState} from 'react';
import Styled from 'styled-components';
import axios from 'axios';
import { Mobile } from '../css/responsive';
import {Link} from 'react-router-dom';
import { base_url } from '../requestMethod';

var Container = Styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    padding:10px;
    ${Mobile({flexDirection:'column'})}
`

var CategoryContianer = Styled.div`
    height:60vh;
    display:flex;
    justify-content:center;
    flex:1;
    position:relative;
    ${Mobile({margin:'1% 0'})}
`

var Image = Styled.img`
    width:80%;
    height:100%;
    object-fit:cover;
    ${Mobile({width:'90%'})}
`
var Info = Styled.div`
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
var Title = Styled.h1`
    font-weight:600;
    color:white;
    margin-bottom:1rem;
    text-shadow:0 0 10px black;
`
var Button = Styled.button`
    border:none;
    background-color:white;
    color:gray;
    cursor:pointer;
    padding:10px;
    transition:all 0.5s ease-in-out;
    &:hover{
        color:black;
        border:1px solid black;
    }
`

function Category() {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get(`${base_url}api/category`).then(res=>{
            setCategory(res.data);
        })
    }, []);
    var result = category.map((item,index)=>{
        return <CategoryContianer key={item._id}>
                <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Link to={`productlist/${item.category[index]}`}>
                    <Button>Shop Here</Button>
                    </Link>
                </Info>
                </CategoryContianer>
    });
    return (
        <Container>
            {result}
        </Container>
    )
}

export default Category
