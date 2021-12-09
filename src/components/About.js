import React from 'react';
import AboutScreen from "./about2.svg";
import './about.css';
import Chef from './chef.svg'


export function About() {
    return (
        <div className="aboutPageContainer">
            <div style={{ height: "100%", display: "flex", justifyContent: "center", color: "white", flexDirection: "column", alignItems: "center"}}>
                <img src={AboutScreen} alt="" width="300"/>
            </div>


            <section className="aboutPage">
                <section className="aboutContainer">
                    <section className="aboutHeader">
                        <h1> Legendary Jeff </h1>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </section>

                    <section className="contact">
                        <section className="contactIcon">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="fa fa-facebook"></a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="fa fa-twitter"></a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="fa fa-linkedin"></a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="fa fa-instagram"></a>
                        </section> 
                    </section>
                </section>
                

                <section className="aboutImg">             
                    <img src={Chef} alt="chef" width="100%" />
                </section> 
            </section>
        </div>
    )
}

export default About
