import { ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import Styled from 'styled-components';
import { Mobile } from '../css/responsive';

var Container = Styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color: #F6F6F6;
    position:relative;
    overflow:hidden;
    ${Mobile({height:'30vh'})}
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
        z-index:2;
        &:hover{
            opacity:1;
        }
        ${Mobile({width:'30px',height:'30px'})}
    `
    
    var Wrapper = Styled.div`
        display:flex;
        height:100%;
        ${props => props.position !== props.max ? 'transition : all 1s ease-in-out' : null};
        transform:translateX(${props => props.position * -100}vw);
        ${Mobile({height:'30vh'})}
    `

    var Slide = Styled.div`
        width:100vw;
        height:100vh;
        display:flex;
        align-items:center;
        background-color:${props=>props.bg};
        ${Mobile({height:'30vh'})}
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
        flex:2;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    `
    var Title = Styled.h1`
        font-size:calc(20px + 3vw);
        font-weight:600;
        ${Mobile({fontSize:'10px'})}
    `
    var Desc = Styled.p`
        margin:3vw 0;
        font-size:1rem;
        font-weight:600;
        letter-spacing:5px;
        ${Mobile({fontSize:'3vw',margin:'1vw',fontWeight:'300',letterSpacing:'0',textAlign:'center'})}
    `
    var Button = Styled.button`
        padding:0 10px;
        font-size:1.5rem;
        font-weight:200;
        background-color:transparent;
        cursor:pointer;
        ${Mobile({display:'none'})}
    `

function Slider() {
    const [position, setPosition] = useState(0);
    var max;
    const handleClick = (direction)=>{
        var wrapper = document.getElementById("wrapper").children.length;
        max = wrapper-1;
        if(direction === 'left'){
            setPosition(position > 0 ? position - 1 : wrapper - 1);
        }
        if(direction === 'right'){
            setPosition( position < wrapper - 1 ? position + 1 : 0);
        }
        console.log(position+" : "+max);
        
    }
    return (
        <Container>
            <Arrow direction='left' onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper id='wrapper' position={position} max={max}>
                <Slide bg='#F3DCFC'>
                <InfoContainer>
                    <Title>NEW YEAR SALE 2022</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Desc>
                    <Button>Show Now</Button>
                </InfoContainer>
                <ImgContainer>
                 <Img src='https://i.pinimg.com/originals/4c/1e/67/4c1e679883d1355b9ee0aa0fd832ee4f.png'/>
                </ImgContainer>
                </Slide>
                <Slide bg='#DCFCE6'>
                <ImgContainer>
                 <Img src='https://purepng.com/public/uploads/large/purepng.com-women-shoppingwomenpeoplepersonsfemaleshopping-11215250867525vehx.png'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>FASHION SALE 2022</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Desc>
                    <Button>Show Now</Button>
                </InfoContainer>
                </Slide>
                <Slide bg='#FCF1DC'>
                <InfoContainer>
                    <Title>FESTIVAL SALE 2022</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Desc>
                    <Button>Show Now</Button>
                </InfoContainer>
                <ImgContainer>
                 <Img src='https://lh3.googleusercontent.com/proxy/e1BwQ2tn9oNszfU5oyLGodezCOAxhDpiUohz-TauTdxiHlCZZH2EPpE_jdRC_RBLvy5x8tOeQIrG1C9xzJoQza2o7HSetbyTCJruDWvq2B9OSzJTPiWvV7DdQj9jfnCtdtl0d2VGW1-qknr3xPbMiKldz9fLfW0jvoa-MQ'/>
                </ImgContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right' onClick={()=>handleClick('right')}>
            <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
