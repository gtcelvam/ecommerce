import { ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons';
import React from 'react';
import Styled from 'styled-components';


function Slider() {
    var Container = Styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color: #E5E5E5;
    position:relative;
    overflow:hidden;
    `
    var Arrow = Styled.div`
        width:50px;
        height:50px;
        background-color: #FFE1E1;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        position:absolute;
        top:0;
        bottom:0;
        margin:auto;
        opacity:0.5;
        ${props=>props.direction}:10px;
        &:hover{
            opacity:1;
        }
    `
    
    var Wrapper = Styled.div`
        height:100%;
    `

    var Slide = Styled.div`
        width:100vw;
        height:100vh;
        display:flex;
        align-items:center;
    `

    var ImgContainer = Styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        flex:1;
        height:100%;
    `

    var Img = Styled.img`
        height:80%;
    `

    var InfoContainer = Styled.div`
        flex:1;
        display:flex;
        align-items:center;
        justify-content:center;
    `

    return (
        <Container>
            <Arrow direction='left'>
            <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide>
                <InfoContainer>SUMMER SALE 2022</InfoContainer>
                <ImgContainer>
                 <Img src='https://i.pinimg.com/originals/4c/1e/67/4c1e679883d1355b9ee0aa0fd832ee4f.png'/>
                </ImgContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right'>
            <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
