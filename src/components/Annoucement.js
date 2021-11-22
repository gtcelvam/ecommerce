import React from 'react';
import Styled from 'styled-components';

var Container = Styled.div`
    height:3vh;
    background-color:teal;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:400;
`

function Annoucement() {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over 500 Rs
        </Container>
    )
}

export default Annoucement;
