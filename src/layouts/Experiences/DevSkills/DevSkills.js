import React, { Component } from 'react';
import CardSkill from '../../../components/CardSkill';
import skillList from "../../../data/data";
import "./devskills.css";

class DevSkills extends Component {
    constructor(props) {
        super(props);
        this.state = { skillList, skillSelected: [] }
    }

    componentDidMount(){
        // Muestro las cartas de front end 
        this.setSkill("front-end")
    }

    setSkill(skill){
        const newArr = []
        // recorro el array, y obtengo la seccion que quiero
        this.state.skillList.map(ele => {
            if(skill === "all"){
                newArr.push(ele)
            }else if(ele.section === skill){
                newArr.push(ele)
            }
        })

        this.setState({skillSelected: newArr})
    }

    render() { 
        return ( 
            <div className="DevSkills" id="Experiences">
                <h2>Developer Skills</h2>
                <div className="DevHeader">
                    <button onClick={() => this.setSkill("all")}> All My Skills</button>
                    <button onClick={() => this.setSkill("front-end")}> Front-end</button>
                    <button onClick={() => this.setSkill("back-end")}> Back-end</button>
                    <button onClick={() => this.setSkill("database")}> DB</button>
                    <button onClick={() => this.setSkill("design")}> Design</button>
                </div>
                <div className="DevGroup">

                     {
                        this.state.skillSelected.map((ele, index) => {

                            return (

                                <CardSkill 
                                    title={ele.name} 
                                    img={ele.image} 
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
}
 
export default DevSkills;