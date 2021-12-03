import React from 'react';
import Styled from 'styled-components';
import {Mobile} from '../css/responsive';

var Container = Styled.div`
    height:3vh;
    background-color:#01BEDC;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:400;
    ${Mobile({height:"50px",fontSize:"4vw"})}
`

function Annoucement() {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over 500 Rs
        </Container>
    )
}

export default Annoucement;
