import React, { useState, useEffect } from 'react';
import AboutScreen from "../About/about2.svg";
import '../About/about.css';
import Chef from '../About/chef.svg';

import { firebase } from '../Firestore/firebase'

let db = firebase.database()

export function About() {
    let [ value, setValue ] = useState({})

    useEffect(() => {
        db.ref('about').on('value', snapshot => {
            if (snapshot.val() != null)
            setValue({
                ...snapshot.val()
            })
        })

    }, [])


    return (
        <div className="aboutPageContainer">
            <div style={{ height: "100%", display: "flex", justifyContent: "center", color: "white", flexDirection: "column", alignItems: "center"}}>
                <img src={AboutScreen} alt="" width="300"/>
            </div>


            <section className="aboutPage">
                <section className="aboutContainer">
                        {Object.keys(value).map(id => {
                            return <section className="aboutHeader">

                            <h1> {value[id].header} </h1>
                            <p> {value[id].description} </p>

                            </section>

                        })}

                    <section className="contact">
                            {Object.keys(value).map(id => {
                                return  <section className="contactIcon">
                                    <a href={`https://facebook.com/${value[id].facebook}`} target="_blank" rel="noreferrer" className="fa fa-facebook"> <span> facebook </span> </a>
                                    <a href={`https://twitter.com/${value[id].twitter}`} target="_blank" rel="noreferrer" className="fa fa-twitter"> <span> twitter </span> </a>
                                    <a href={`https://linkedin.com/in/${value[id].linkedin}`} target="_blank" rel="noreferrer" className="fa fa-linkedin"> <span> linkedin </span> </a>
                                    <a href={`https://instagram.com/${value[id].instagram}`} target="_blank" rel="noreferrer" className="fa fa-instagram"> <span> instagram </span> </a>
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
