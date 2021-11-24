import React from 'react';
import Styled from 'styled-components';
import {Send} from '@material-ui/icons';

var Container = Styled.div`
    height:50vh;
    background-color:#F8F8F8;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
var Title = Styled.h1`
    font-size:5vw;
    font-weight:200;
    margin:0;
`;
var Desc = Styled.p`
    font-size:2vw;
    font-weight:100;
`;
var InputContainer = Styled.div`
    width:50%;
    border:0.5px solid #D4D4D4;
    display:flex;
`;
var Input = Styled.input`
    flex:9;    
    border:none;
    padding:1.5% 1%;
    &:focus{
        outline:none;
    }
`;
var Button = Styled.button`
    flex:1;
    border:none;
    background-color:#01BEDC;
    color:white;
`;


function Newsletter() {
    return (
        <Container>
            <Title>News Letter</Title>
            <Desc>Get Timely Updates Of Your Favorite Products</Desc>
            <InputContainer>
                <Input placeholder='Enter Your Email Here...'/>
                <Button><Send/></Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
