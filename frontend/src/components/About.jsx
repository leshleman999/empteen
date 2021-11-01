import React from 'react'
import '../css/about.css'

function About() {
    return (
        <div className="aboutContainer">
            <div className="card">
                <h3>About This Environment</h3>
                <div>
                    <section className="aboutDescription">
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laudantium distinctio ipsam et quia natus nemo iste maxime id est exercitationem, voluptatem nisi veniam illum pariatur debitis quae, optio placeat?
                        </p>
                    </section>
                    <section className="teacher">
                        <h4>Teacher</h4>
                        <p>Lance</p>
                    </section>
                    <section className="aboutTeacher">
                        <h4>About Teacher</h4>
                        <p>Lance is an amazing teacher with the patience, knowledge, and care to ensure you get the most out of this course.</p>
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
