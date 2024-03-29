import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import { Mobile } from "../css/responsive";
import { publicRequest, userRequest } from "../utils/helpers/requestMethod";
import { productList } from "../redux/apiCall";

var Container = Styled.div``;

var Wrapper = Styled.div`
    padding:5%;
    display:flex;
    ${Mobile({ flexDirection: "column" })}
`;

var ImgContainer = Styled.div`
    flex:1;
`;

var Image = Styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${Mobile({ height: "50vh" })}
`;

var InfoContainer = Styled.div`
    flex:1;
    padding:0 5%;
`;

var Title = Styled.h1`
    font-weight: 200;
    ${Mobile({ fontSize: "1rem", fontWeight: "600" })}
`;

var Desc = Styled.p`
    margin:2% 0;
    ${Mobile({ fontSize: "3vw" })}
`;

var Price = Styled.span`
    font-size:1.5vw;
    font-weight:100;
    ${Mobile({ fontSize: "4vw", fontWeight: "600" })}
`;

var FilterContainer = Styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${Mobile({ width: "100%" })}
`;
var Filter = Styled.div`
    display:flex;
    align-items:center;
`;

var FilterTitle = Styled.p`
    font-size:1vw;
    margin-bottom:0;
    margin-right:1vw;
    ${Mobile({ fontSize: "5vw" })}
`;
var FilterColor = Styled.span`
    margin:0 1%;
    width:1.5vw;
    height:1.5vw;
    border-radius:50%;
    background-color:${(props) => props.bg};
    border:1px solid gray;
    cursor:pointer;
    ${Mobile({ width: "5vw", height: "5vw" })}
`;

var FilterSize = Styled.select``;

var FilterSizeOption = Styled.option``;

var AddContainer = Styled.div`
    width:50%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1% 0;
    ${Mobile({ width: "100%" })}
`;

var AmountContainer = Styled.div`
    display:flex;
    align-items:center;
    font-weight:600;
`;

var Amount = Styled.span`
    margin:2%;
    width:2vw;
    heigth:2vw;
    border:1px solid #01BEDC;
    display:flex;
    align-items:center;
    justify-content:center;
    ${Mobile({ width: "5vw", height: "5vw", padding: "10px" })}
`;

var Button = Styled.button`
    background-color:#009AA2;
    border:1px solid #01BEDC;
    color:white;
    width:8vw;
    height:3vw;
    padding:1% 2%;
    font-size:14px;
    cursor:pointer;
    ${Mobile({ width: "40vw", height: "30px" })}
    &:hover{
        background-color:#00787E;
    }
`;

function Product(props) {
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  var productLink = useParams();
  var dispatch = useDispatch();
  var navigate = useNavigate();
  const user = useSelector((state) => state.user.activeUser);
  useEffect(async () => {
    try {
      await publicRequest.get(`api/product/${productLink.id}`).then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [productLink.id]);
  var handleClick = (item) => {
    if (item === "add") {
      setQuantity(quantity + 1);
    }
    if (item === "remove" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  var handleAddCart = () => {
    if (user) {
      let productData = {
        userId: user._id,
        products: [
          {
            title: data.title,
            categories: data.categories,
            productId: data._id,
            size,
            color,
            quantity,
            desc: data.desc,
            img: data.img,
            price: data.price,
          },
        ],
      };
      if (size !== "" || color !== "") {
        let userToken = user.accesstoken;
        userRequest
          .post("/api/cart", productData, {
            headers: { token: `bearer ${userToken}` },
          })
          .then((res) => productList(user._id, dispatch));
        //dispatch(addProduct({product : productData}));
      } else {
        alert("Size or Color is not selected");
      }
    } else {
      alert("You're not logged in");
    }
  };
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <ImgContainer>
          <Image src={data.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{data.title}</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            tempor erat dictum, euismod quam ut, rutrum urna. Praesent rutrum
            placerat velit et imperdiet. Fusce tempor erat in lobortis eleifend.
            Donec sit amet fermentum ante. Sed quis tellus sed sapien molestie
            ultrices ac et nulla. Pellentesque tincidunt nulla a enim pretium.
          </Desc>
          <Price>&#8377; {data.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {data.color &&
                data.color.map((item) => {
                  return (
                    <FilterColor
                      bg={item}
                      key={item}
                      onClick={() => setColor(item)}
                    />
                  );
                })}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {data.size &&
                  data.size.map((item) => {
                    return (
                      <FilterSizeOption key={item}>{item}</FilterSizeOption>
                    );
                  })}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("remove")}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("add")}
              />
            </AmountContainer>
            <Button onClick={handleAddCart}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
