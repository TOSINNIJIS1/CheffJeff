import React from 'react'
import ContactScreen from "../Contact/contact.svg";
import ContactImage from '../Contact/Contact1.svg';
import '../Contact/Contact.css';
import emailjs from 'emailjs-com'


export function Contact() {
    const onSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('Tosinnijis', 'porto_template', e.target, 'user_bHTPzVdnA6AwTs8F6mu2b')
        .then((result) => {
            window.confirm(result.text);
        }, (error) => {
            console.warn(error.text)
        })
        e.target.reset()
    }

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

                    <form onSubmit={onSubmit} style={{marginBottom: '16%'}}>

                        <label> Full Name* </label>
                        <input 
                        type='name'
                        name='name'
                        required

                        />

                        <label> Email Id* </label>
                        <input
                        type="email"
                        name="email"
                        required
                        />

                        <label> Subject* </label> 
                        <input
                        type='text'
                        name='subject'
                        required
                        />

                        <label> Message* </label>
                        <textarea
                        placeholder="Your message here"
                        className="msg"
                        type='text'
                        name='message'
                        required
                        />

                        <button className='btn btn-outline-secondary' style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px'}} > 
                        {/* SEND */}
                        <i style={{fontSize: '2rem'}} class="fa fa-paper-plane" aria-hidden="true" > </i>
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

