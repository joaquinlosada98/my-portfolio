import React from 'react';
import styled from "styled-components";
import Arrow from './Arrow';
import {courses} from '../data/courses';

const CardItem = styled.div`

    width: 100%;
    margin-bottom:20px;
    max-height: 600px;

    overflow: hidden;

    background: #fcfcfc;

    /*Me aseguro que sea una mascara*/
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    transition: 0.8s transform cubic-bezier(0.2, 0.8, 0.2, 1.0),  0.8s box-shadow cubic-bezier(0.2, 0.8, 0.2, 1.0);
    transform: skew(-10deg);

    position: relative;

    &:hover {
        transform: scale(1.025, 1.025) skew(-10deg);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
    }
`

const CardSection = styled.div`
    transform: skew(10deg);
    padding-bottom: ${(props) => props.collapseOn ? "130px"  : "65px"};
    transition: 0.8s padding-bottom cubic-bezier(.77,0,.18,1);

    @media (max-width: 750px){ 
        padding-bottom: ${(props) => props.collapseOn ? "160px"  : "80px"};
      
    }

    @media (max-width: 530px){
        padding-bottom: ${(props) => props.collapseOn ? "150px"  : "75px"};
    }

    @media(max-width: 450px){
        padding-bottom: ${(props) => props.collapseOn ? "160px"  : "75px"};
    }
`

const CardTitle = styled.h3`
    color: black;
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

const CardList = styled.ul`
    margin: 10px auto;
    width: 90%;
    position: absolute;
    top: 40px;
    left: 30px;
    background-color:#fcfcfc;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 1.5px;
    font-size: 16px;
    color: #41445f;
    font-style: italic;


    @media (max-width: 750px){
        grid-template-columns: repeat(2,1fr);
        font-size: 14px;
        left: 30px;
    }

    @media (max-width: 530px){
        grid-column-gap: 8px;
        grid-row-gap: 1.8px;
        left:-10px;
        font-size: 12.5px;
    }

    @media (max-width: 450px){
        left: -15px;
        font-size: 11.5px;
    }

    
`

const Link = styled.a`
    color: #5444ab;
    text-decoration: none;
    font-weight: 600;
`

const CardBottom = styled.div`
    position: sticky;
    background-color: #fcfcfc;
`

const Button = styled.button`
    display:block;
    transform: skew(10deg);
    border: none;
    background-color:transparent;
    cursor: pointer;
    margin: 0 auto;

`


const CardCerti = ({collapse, setCollapse}) => {

    return (

        <CardItem>

            <CardSection collapseOn={collapse}>

                <CardTitle>Studies and certifications: </CardTitle>
                

                <CardList>
                    {
                        courses.map((ele,index) => (
                            <li key={index}> 
                                <Link href={ele.url}>{ele.title}</Link>
                            </li>
                        ))
                    }
                </CardList>

            </CardSection>

            <CardBottom>
                <Button onClick={() => { setCollapse(!collapse)}}>

                    {collapse ? <h4>Roll Back</h4> : <h4>See More</h4>}

                    <div className={collapse ? "Arrow ArrowRotate" : "Arrow"}><Arrow/></div>
                </Button>
            </CardBottom>

        </CardItem>
   );
}
 
export default CardCerti;