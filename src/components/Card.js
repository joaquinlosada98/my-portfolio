import React from 'react';
import styled from "styled-components";

const CardItem = styled.div`
    width: 100%;
    max-height: 500px;

    overflow: hidden;
    background: linear-gradient(104.74deg, #727ec4 0%,#7f86a8 100%); 
    
    /*Me aseguro que sea una mascara*/
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        transform: scale(1.025, 1.025);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
    }
`

const CardTitle = styled.h3`
    color: black;
    font-size: 30px;
    margin: 15px 0 0 20px;
    width: 300px;
    background: linear-gradient(104.74deg, #050A27 0%,#4A548C 85%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 450px){ 
        font-size: 27px;
    }
 
`

const CardText = styled.p`
    color:black;
    font-size: 18px;
    margin: 10px 20px 20px 20px;

    @media (max-width: 450px){ 
        font-size: 17px;
    }

`
const Card = ({title, children}) => {
    return(
        <CardItem>
            <CardTitle>{title}</CardTitle>
            <CardText>{children}</CardText>
        </CardItem>
    )
}

export default Card