import React from 'react'
import ContactScreen from "./contact.svg";
import ContactImage from './Contact1.svg';
import './Contact.css'


export function Contact() {
    return (
        <div>
            <div style={{ height: "100%", display: "flex", justifyContent: "center", color: "white", flexDirection: "column", alignItems: "center"}}>
                <img src={ContactScreen} alt="" width="300"/>
            </div>

            <header> 
                <h3 className="contactHead"> Contact me </h3>
            </header>

            <div className="contactContainer">

                <div className="contact">
                    <h1> Let's get in touch </h1>

                    <form>

                        <label> Full Name* </label>
                        <input 

                        />

                        <label> Email Id* </label>
                        <input

                        />

                        <label> Subject* </label> 
                        <input
                        />

                        <label> Message* </label>
                        <input
                        placeholder="Your message here"
                        className="msg"
                        />

                        <button disabled> 
                            <h4> Send </h4>
                        </button>


                    </form>

                </div>

                <div className="img">
                    <img src={ContactImage} alt="#" width="100%" />
                </div>

                
            </div>            
            
            
        </div>
    )
}

