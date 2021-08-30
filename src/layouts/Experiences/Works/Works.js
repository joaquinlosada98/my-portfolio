import React, { Component } from 'react';
import projects from "../../../data/projects"
import CardWork from '../../../components/CardWork';
import "./works.css"


class Works extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projects,
            isDown: false,
            startX: null,
            scrollLeft: null
         }
    }

    mouseDown = (e) => {
        this.setState({isDown: true});

        const slider = document.querySelector('.WorksGroup');
        slider.classList.add('active');

        this.setState({
            startX: e.pageX - slider.offsetLeft,
            scrollLeft: slider.scrollLeft
        })
    }

    mouseLeave = () => {
        this.setState({isDown: false});

        const slider = document.querySelector('.WorksGroup');
        slider.classList.remove('active');

    }

    mouseUp = () => {
        this.setState({isDown: false});

        const slider = document.querySelector('.WorksGroup');
        slider.classList.remove('active');

    }

    mouseMove = (e) => {
        const slider = document.querySelector('.WorksGroup');
        if(this.state.isDown === true) {

            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - this.state.startX) * 2.5; //scroll-fast
            slider.scrollLeft = this.state.scrollLeft - walk;

        }else{
            return;
        } 

    }

    componentDidMount(){
        const slider = document.querySelector('.WorksGroup');
        slider.scrollLeft = 80; // Inital value

        slider.addEventListener('mousedown', (e) => this.mouseDown(e));
          
        slider.addEventListener('mouseleave', () => this.mouseLeave());
          
        slider.addEventListener('mouseup', () => this.mouseUp());
          
        slider.addEventListener('mousemove', (e) => this.mouseMove(e));

    }

    render() { 
        return (  
            <div className="Works">
                <h2>My Works</h2>
                <div className="WorksGroup">

                   {
                       this.state.projects.map((project, index) => {
                           return (
                                <CardWork
                                    {...project}
                                    key={index}
                                />
                           );
                       })
                   }
      
                </div>
            </div>

        );
    }
}
 
export default Works;