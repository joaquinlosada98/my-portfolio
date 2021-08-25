import React from 'react';
import styled from "styled-components";

const CardItem = styled.div`

    width: 100%;
    margin-bottom:20px;
    max-height: 600px;
    overflow: hidden;

    background: #fcfcfc;

    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    transition: 0.8s transform cubic-bezier(0.2, 0.8, 0.2, 1), 0.8s box-shadow cubic-bezier(0.2, 0.8, 0.2, 1);
    transform: skew(-10deg);
    
    display: Grid; 
    /*grid-template-columns: 80% auto;
        Cuando la pantalla sea chica, sacar la imagen de la derecha, y que el titulo tome todo el ancho
    */

    &:hover {
        transform: scale(1.025, 1.025) skew(-10deg);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
    }
`
const LeftSide = styled.div`
    transform: skew(10deg);
    color: black;

`


const CardTitle = styled.h3`
    font-size: 25px;
    margin: 15px 0 0 20px;

    background: linear-gradient(104.74deg, #050A27 0%,#4A548C 85%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 450px){
        font-size: 20px;
    }
 
`

const CardText = styled.p`
    font-size: 18px;
    margin: 10px 20px 20px;
    @media (max-width: 450px){
        font-size: 17px;
    }
`

// const CardImg = styled.img`
//     margin: 0 auto;
//     width: 100px;
//     align-self: center;
//     /*justify-self: end;*/

// `

const CardStudie = ({title, children}) => {
    return(
        <CardItem>
            <LeftSide>
                <CardTitle>{title}</CardTitle>
                <CardText>{children}</CardText>
            </LeftSide>
            {/* <CardImg src={img}/> */}
        </CardItem>
    )
}

export default CardStudie