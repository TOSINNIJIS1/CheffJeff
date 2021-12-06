import React from 'react';
import AboutScreen from "./about2.svg";
import './about.css';
import Chef from './chef.svg'


export function About() {
    return (
        <div>
            <div style={{ height: "100%", display: "flex", justifyContent: "center", color: "white", flexDirection: "column", alignItems: "center"}}>
                <img src={AboutScreen} alt="" width="300"/>
            </div>


            <section className="aboutPage">
                <section className="aboutContainer">
                    <section className="aboutHeader">
                        <h1> Chef and Designer Jeff </h1>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        </p>
                    </section>

                    <section className="contact">
                        <h1> Contact me</h1>
                        <section className="contactIcon">
                            <p> facebook Icon here </p>
                            <p> twitter Icon here </p>
                            <p> linkedin Icon here </p>
                            <p> instagram Icon here </p>
                        </section> 
                    </section>
                </section>
                

                <section>             
                    <img src={Chef} alt="chef" />
                </section> 
            </section>
        </div>
    )
}

export default About
