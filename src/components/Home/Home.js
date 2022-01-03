import React from 'react';
import ArtWorks from '../Arts/Artworks';
import Modal from '../Arts/Modal';
import Carousel from '../Carousel/JeffCarousel';
import HomeScreen from "../Home/home.svg";

export function Home({ selectedImg, setSelectedImg }) {

    return (
        <div>
            <div style={{ height: "100%", display: "flex", justifyContent: "center", color: "white", flexDirection: "column", alignItems: "center"}}>
                <img src={HomeScreen} alt="" width="300"/>
                <p style={{fontFamily: "Freight", fontStyle: "italic", fontWeight: "400", fontSize: 21}}> Graphics Designer / Chef  </p>
            </div>
            
            <div><Carousel /></div>
            <div style={{marginBottom: '5em'}}><ArtWorks setSelectedImg={setSelectedImg}/> </div>
            { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    )
}

