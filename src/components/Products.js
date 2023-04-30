import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import axios from "axios";
import { Mobile } from "../css/responsive";
import { base_url } from "../utils/helpers/requestMethod";
import { CircularProgress } from "@material-ui/core";

var Container = Styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    padding:10px;
    ${Mobile({ flexDirection: "column" })}
`;

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
`;

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
    ${Mobile({ width: "100%" })}
`;

var Circle = Styled.div`
    width:20vw;
    height:40vh;
    background-color:#FFFBEE ;
    position:absolute;
    border-radius:50%;
    ${Mobile({ width: "90%" })}
`;

var Img = Styled.img`
    height:90%;
    z-index:2;
`;
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
`;

function Products({ cat, filter, sort }) {
  const [item, setItem] = useState([]);
  const [filteredItem, setFilteredItem] = useState([]);
  useEffect(() => {
    var getProduct = async () => {
      try {
        axios
          .get(
            cat
              ? `${base_url}api/product?category=${cat}`
              : `${base_url}api/product`
          )
          .then((res) => {
            setItem(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredItem(
        item.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filter, item]);

  useEffect(() => {
    switch (sort) {
      case "newest":
        setFilteredItem((prev) =>
          [...prev].sort(
            (a, b) => parseInt(a.createdAt) - parseInt(b.createdAt)
          )
        );
        break;
      case "asc":
        setFilteredItem((prev) => [...prev].sort((a, b) => a.price - b.price));
        break;
      case "desc":
        setFilteredItem((prev) => [...prev].sort((a, b) => b.price - a.price));
      default:
        break;
    }
  }, [sort]);

  var setProducts = cat
    ? filteredItem.map((element) => {
        return (
          <Product key={element._id}>
            <Circle />
            <Img src={element.img} />
            <Info>
              <Icon>
                <ShoppingCartOutlined />
              </Icon>
              <Link
                to={`/product/${element._id}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <Icon>
                  <SearchOutlined />
                </Icon>
              </Link>
              <Icon>
                <FavoriteBorderOutlined />
              </Icon>
            </Info>
          </Product>
        );
      })
    : item.slice(0, 8).map((element) => {
        return (
          <Product key={element._id}>
            <Circle />
            <Img src={element.img} />
            <Info>
              <Icon>
                <ShoppingCartOutlined />
              </Icon>
              <Link
                to={`/product/${element._id}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <Icon>
                  <SearchOutlined />
                </Icon>
              </Link>
              <Icon>
                <FavoriteBorderOutlined />
              </Icon>
            </Info>
          </Product>
        );
      });

  return (
    <Container>
      {Boolean(item.length) ? setProducts : <CircularProgress />}
    </Container>
  );
}

export default Products;
