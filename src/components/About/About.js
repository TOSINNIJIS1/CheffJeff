import React, { useContext } from 'react';
import AboutScreen from "../About/about2.svg";
import '../About/about.css';
import Chef from '../About/chef.svg';

import { MyContextApi } from '../../useContext/context';

export function About() {
    const content = useContext(MyContextApi)
    

    return (
        <div className="aboutPageContainer">
            <div style={{ height: "100%", display: "flex", justifyContent: "center", color: "white", flexDirection: "column", alignItems: "center"}}>
                <img src={AboutScreen} alt="" width="300"/>
            </div>


            <section className="aboutPage">
                <section className="aboutContainer">
                    {Object.keys(content).map(id => {
                        return <section className="aboutHeader">

                        <h1> {content[id].name} </h1>
                        <p> {content[id].description} </p>

                        </section>

                    })}

                <section className="contact">
                            {Object.keys(content).map(id => {
                                return  <section className="contactIcon">
                                    <a href={`https://facebook.com/${content[id].facebook}`} target="_blank" rel="noreferrer" className="fa fa-facebook"> <span> facebook </span> </a>
                                    <a href={`https://twitter.com/${content[id].twitter}`} target="_blank" rel="noreferrer" className="fa fa-twitter"> <span> twitter </span> </a>
                                    <a href={`https://linkedin.com/in/${content[id].linkedin}`} target="_blank" rel="noreferrer" className="fa fa-linkedin"> <span> linkedin </span> </a>
                                    <a href={`https://instagram.com/${content[id].instagram}`} target="_blank" rel="noreferrer" className="fa fa-instagram"> <span> instagram </span> </a>
                                </section>
                            })}
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
