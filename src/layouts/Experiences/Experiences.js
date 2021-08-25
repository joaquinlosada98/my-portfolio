import React from 'react';
import styled from 'styled-components'

import DevSkills from './DevSkills/DevSkills';
import JobExperiences from './JobExperiences/JobExperiences'
import Works from './Works/Works'
import Wave from '../../components/Wave';




const ExperienceGroup = styled.div`
    margin: 100px 0 0;
    background: linear-gradient(#464242 0%,#4A548C 150%);
    background-size: cover;
    height: 600px;
    position: relative;

`


const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg)
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const ExperienceTitle = styled.h2`
    
    padding: 260px 10px;
    font-size: 60px;
    text-align: center;
    font-weight: 700;

    background:linear-gradient(103.49deg,#FFF 0%,#ffbbc1 90.7%);

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 450px){ 
        font-size: 55px;
    }

`


const Experiences = () => {
    return(
        <>
            {/* Crear un componete llamado Section y pasar propiedades de gradiant y titulo*/}
            <ExperienceGroup>
                <WaveTop><Wave /></WaveTop>
                <WaveBottom><Wave /></WaveBottom>
                <ExperienceTitle>Experiences</ExperienceTitle>
            </ExperienceGroup>

 
            <DevSkills/>

            <JobExperiences/>
            
            <Works/>
        </>
    )

}
export default Experiences