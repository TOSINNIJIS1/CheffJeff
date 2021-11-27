import React from 'react';
import AboutScreen from "./about2.svg";


export function About() {
    return (
        <div>
            <h1> About </h1>
            <div style={{ height: "100%", display: "flex", justifyContent: "center", color: "white", flexDirection: "column", alignItems: "center"}}>
                <img src={AboutScreen} alt="" width="300"/>
            </div>
        </div>
    )
}

export default About
