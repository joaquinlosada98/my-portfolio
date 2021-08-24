import React, { useEffect, useState } from 'react';
import CardSkill from '../../../components/CardSkill';
import skillData from "../../../data/data";
import { graphql, useStaticQuery } from "gatsby"
import "./devskills.css";

const DevSkills = () => {

    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "img-skills"}}) {
                edges {
                    node {
                        name
                        childImageSharp {
                            gatsbyImageData(width: 60)
                        }
                    }
                }
            }
        }
    `)

    const [skillArr, setSkillArr] = useState([])
    const [skillSelected, setSkillSelected] = useState([])
    


    const setSkillStates = () => {
        // recorrer skillData 
        const newArr = skillData.map((ele) => {
            // creo un nuevo objeto que tiene las mismas props
            let newObj = ele;

            // obtengo la imagen de GraphQl y la guardo en mi nuevo objeto
            let imagen = data.allFile.edges.find(img => img.node.name === ele.imageName)
            newObj.imagen = imagen.node;

            // devuelvo el objeto
            return newObj
        });

        // Seteo array principal con todos los objetos preparados
        setSkillArr(newArr);
    
        // Preparo Array de elementos "Front-end"
        const newSelected = newArr.filter(ele => ele.section === "front-end")

        // Seteo array selected con los elementos "Front-end"
        setSkillSelected(newSelected);

    } 

    const setSkill = (skill) => {

        const newArr = []

        // recorro el array, y obtengo la seccion que quiero
        skillArr.forEach(ele => {
            if(skill === "all"){
                newArr.push(ele)
            }else if(ele.section === skill){
                newArr.push(ele)
            }
        });

       setSkillSelected(newArr);
    }

    useEffect(() => {  
        setSkillStates()
    }, []);
    
    /* Arreglar primera vez que se ejecuta el useEffect!  */

   

    return ( 
        <div className="DevSkills" id="Experiences">
            <h2>Developer Skills</h2>
            <div className="DevHeader">
                <button onClick={() => setSkill("all")}> All My Skills</button>
                <button onClick={() => setSkill("front-end")}> Front-end</button>
                <button onClick={() => setSkill("back-end")}> Back-end</button>
                <button onClick={() => setSkill("database")}> DB</button>
                <button onClick={() => setSkill("design")}> Design</button>
            </div>
            <div className="DevGroup">

                    {
                        skillSelected.map((ele, index) => {

                            return (

                                <CardSkill 
                                    title={ele.name} 
                                    img={ele.imagen} 
                                    status={ele.status} 
                                    key={index}
                                />
                            
                            )
                            
                    
                        })
                    }

            </div>
        </div>
    );
    
}
 
export default DevSkills;