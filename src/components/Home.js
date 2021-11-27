import React from 'react';
import ArtWorks from './Artworks';
import Carousel from './Carousel/JeffCarousel';
import HomeScreen from "./home.svg";

export function Home() {
    return (
        <div >
            <div style={{ height: "100%", display: "flex", justifyContent: "center", color: "white", flexDirection: "column", alignItems: "center"}}>
                <img src={HomeScreen} alt="" width="300"/>
                <p style={{fontFamily: "Freight", fontStyle: "italic", fontWeight: "400", fontSize: 21}}> graphics designer / chef  </p>
            </div>
            
            <div><Carousel /></div>
            <div><ArtWorks /></div>
            
        </div>
    )
}

