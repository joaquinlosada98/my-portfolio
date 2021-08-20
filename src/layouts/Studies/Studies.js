import React, { useState } from 'react';
import styled from 'styled-components'
import CardStudie from '../../components/CardStudie';
import CardCerti from '../../components/CardCerti';
import Wave from '../../components/Wave';
import './studies.css';


const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg)
`

const Studies = () => {

    const [collapse, setCollapse] = useState(false);

    return ( 
        <div className={collapse ? "Studies StudiesCollapse" : "Studies"} id="Studies">
                <WaveTop><Wave /></WaveTop>
              
                <h2>Studies</h2>
                
                <div className="StudiesGroup">

                    <CardStudie title={'Escuela tecnica N°26 "Condeferación Suiza"'}>
                        Tecnico en computacion (2016)
                    </CardStudie>

                    <CardStudie title={"Universidad Argentina de la Empresa"}>
                        Ingenieria en informatica (2018 - actualidad)
                    </CardStudie>

                    
                    <CardCerti
                        collapse={collapse}
                        setCollapse={setCollapse}
                    />
                    
                </div>

        </div>
    );
}
 
export default Studies;