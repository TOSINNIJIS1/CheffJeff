import React, { useState, useEffect } from 'react';
import AboutScreen from "../About/about2.svg";
import '../About/about.css';
import Chef from '../About/chef.svg';

import { firebase } from '../Firestore/firebase'
import useFirestore from '../Firestore/useFirestore';

// let db = firebase.database()

export function About() {

    const { docs } = useFirestore('about')
    console.log(docs)

    let [ value, setValue ] = useState({})

    return (
        <div className="aboutPageContainer">
            <div style={{ height: "100%", display: "flex", justifyContent: "center", color: "white", flexDirection: "column", alignItems: "center"}}>
                <img src={AboutScreen} alt="" width="300"/>
            </div>


            <section className="aboutPage">
                <section className="aboutContainer">
                        {/* {docs.map(data => { return  */}
                        
                        <section className="aboutHeader">

                            <h1> Jeff Provorse </h1>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>

                            </section>

                        {/* })} */}

                    <section className="contact">
                            {/* {Object.keys(docs).map(id => { */}
                                {/* return  */}
                                 <section className="contactIcon">
                                    <a href={`https://facebook.com/`} target="_blank" rel="noreferrer" className="fa fa-facebook"> <span> facebook </span> </a>
                                    <a href={`https://twitter.com/`} target="_blank" rel="noreferrer" className="fa fa-twitter"> <span> twitter </span> </a>
                                    <a href={`https://linkedin.com/in/`} target="_blank" rel="noreferrer" className="fa fa-linkedin"> <span> linkedin </span> </a>
                                    <a href={`https://instagram.com/`} target="_blank" rel="noreferrer" className="fa fa-instagram"> <span> instagram </span> </a>
                                </section>
                            {/* })} */}
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
