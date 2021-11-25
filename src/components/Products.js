import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import Styled from 'styled-components';
import {ShoppingCartOutlined,SearchOutlined,FavoriteBorderOutlined} from "@material-ui/icons";
import axios from 'axios';

var Container = Styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    padding:10px;
`

var Info = Styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    z-index:3;
    display:flex;
    background-color:rgba(169, 255, 225, 0.5);
    display:flex;
    align-items:center;
    justify-content:center;
    opacity:0;
    transition:all 0.5s ease-in-out;
`

var Product = Styled.div`
    width:20vw;
    height:40vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#E8FFF7 ;
    margin:1%;
    position:relative;
    &:hover ${Info}{
        opacity:1;
    }
`

var Circle = Styled.div`
    width:20vw;
    height:40vh;
    background-color:#FFFBEE ;
    position:absolute;
    border-radius:50%;
`

var Img = Styled.img`
    height:90%;
    z-index:2;
`
var Icon = Styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:1%;
    transition:all 0.5s ease-in-out;
    &:hover{
        background-color:#F1F1F1;
        transform:scale(1.1);
    }
`

function Products() {
    const [item, setItem] = useState([]);
    useEffect(() => {
        axios.get("https://thselvan1.herokuapp.com/api/product").then(res=>{
            setItem(res.data);
        });
    }, [])

    var setProducts = item.map(element=>{
        return <Product key={element._id}>
            <Circle/>
            <Img src={element.img}/>
            <Info>
                <Icon><ShoppingCartOutlined/></Icon>
                <Link to={`/product/${element._id}`} style={{color:'black',textDecoration:'none'}}>
                <Icon><SearchOutlined/></Icon>
                </Link>
                <Icon><FavoriteBorderOutlined/></Icon>
            </Info>
        </Product>
    });

    return (
        <Container>
            {setProducts}
        </Container>
    )
}

export default Products
