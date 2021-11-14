import React from 'react'
import '../css/about.css'
import { useStateValue } from '../utils/StateProvider';

function About() {
    const [state,dispatch] = useStateValue()
    return (
        <div className="aboutContainer">
            <div className="card">
                <h3>{state.curEnv.envName} Environment</h3>
                <div>
                    <section className="aboutDescription">
                        <h4>Description</h4>
                        <p>{state.curEnv.envDescription}</p>
                    </section>
                    <section className="teacher">
                        <h4>Teacher</h4>
                        <p>Teacher Name goes here</p>
                    </section>
                    <section className="aboutTeacher">
                        <h4>About Teacher</h4>
                        <p>Teacher About me goes here.</p>
                    </section>
                </div>        
            </div>
                <div className="aboutRules card">
                    <h3>Rules</h3>
                </div>
                <div className="aboutMembers card">
                    <h3>Members</h3>
                </div>
        </div>
    )
}

export default About
