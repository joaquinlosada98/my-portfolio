import React from 'react';
import styled from "styled-components";

const CardItem = styled.div`
    width: 100%;
    max-height: 500px;
    min-width: 240px; 
    overflow: hidden;
    background:linear-gradient(103.49deg, #666980 0%, #494e76 100.7%);
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    display: grid;
    grid-template-rows: repeat(2, auto);


    &:hover {
        transform: scale(1.025, 1.025);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
    }
`
const CardTitle = styled.div`
    display: grid;
    grid-template-columns: 70% auto;
    grid-gap: 10px

`

const Title = styled.h3`
    margin: 20px 0px 20px 20px;
    font-size: 25px;
    color: #efefef;

`
const Image = styled.img`
    width: 60px;
    margin: 10px auto;
    align-self: flex-start;
    pointer-events: none;
`

const CardText = styled.p`
    margin: 20px 20px;
    color: #efefef;
`



const CardSkill = ({title, status, img}) => {

    return (
        <CardItem>
            <CardTitle>
                <Title>{title}</Title>
                <Image src={img}></Image>
            </CardTitle>
            <CardText>Status: {status}</CardText>
        </CardItem>
    )
}

export default CardSkill