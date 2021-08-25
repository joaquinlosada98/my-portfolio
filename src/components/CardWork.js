import React from 'react';
import styled from "styled-components";
import img from '../images/dev/example.png';

const CardItem = styled.div`
    display: grid;
    background: linear-gradient(104.74deg, #5c6291 0%,#5a68b6 100%);/*linear-gradient(104.74deg, #494e76 0%,#050A27 120%); */
    min-width: 260px;
    min-height: 380px; 
    margin: 0px 10px;
    
    overflow-x: hidden;

    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);

    grid-template-rows: 40% auto;
    overflow-y: hidden;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }
    
    @media (max-width: 500px) {
        min-height: 300px;
        min-width: 220px;
        overflow-x: hidden;
    }

`

const Image = styled.img`
    width: 100%;
    height: 100%;
    pointer-events: none;
    /*min-height: 150px;*/
    
    /* @media (max-width: 500px) {
        width: 100%;
        
    } */
   
`


const CardSection = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
`

const Title = styled.h3`
    margin: 15px auto;
    text-align: center;
    font-size: 20px;
    color: #efefef;
    @media (max-width: 500px) {
        font-size: 19px;
        margin: 10px auto;
    }

`

const Description = styled.p`
    font-size: 17px;
    height: 90px;
    margin: 0px 10px;
    color: #f7f7f7;
    width: 240px;
    
    white-space: pre-wrap;

    @media (max-width: 500px) {
        font-size: 15px;
        height: 75px;
        width: 200px;
    }
`

const Button = styled.a`
    width: 70%;
    display: block;
    margin: 15px auto;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: white;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 1);
    padding: 9px 20px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    text-decoration: none;
    
    &:hover {
        background: white;
        color: black;
        border: 2px solid rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 500px) {
        margin: 0px auto;
        
    }

    
`
const ButtonDis = styled.a`
    width: 70%;
    display: block;
    margin: 15px auto;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: black;
    text-transform: uppercase;
    background: #e1e1e1;
    padding: 9px 20px;
    border: 2px solid rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    text-decoration: none;

    @media (max-width: 500px) {
        margin: 0px auto;
        
    }

`
const CardWork = ({title, description, url, status}) => {

    const BtnEnable = <Button>View</Button>
    const BtnDisabled = <ButtonDis>In progress</ButtonDis>
    
    return (
        <CardItem>
            <Image src={img}/>
            <CardSection>

                <div>
                    <Title>{title}</Title>
                    <hr/>
                </div>

                <div>
                    <Description>{description}</Description>
                    {status === "true" ? BtnEnable : BtnDisabled}
                </div>          

            </CardSection>
        </CardItem>
    )
}

export default CardWork