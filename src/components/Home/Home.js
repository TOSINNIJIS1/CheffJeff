import React, { useContext } from 'react';
import { MyContextApi } from '../../useContext/context';
import ArtWorks from '../Arts/Artworks';
import Modal from '../Arts/Modal';
import Carousel from '../Carousel/JeffCarousel';
import useFirestore from '../Firestore/useFirestore';



export function Home({ selectedImg, setSelectedImg, selectedTitle, setSelectedTitle }) {
    // Custom hook for firestore
    const value = useContext(MyContextApi)
    const {docs} = useFirestore('artworks')
    // Map the object for the content
    let content = value.map(data => data.content)
    // map and filtered the logo using the ternary operator
    const urlImg = docs.map((data, i) => data.select === 'Logo' && i === 0  ? data.url : 'https://firebasestorage.googleapis.com/v0/b/cheffjeffart.appspot.com/o/artworks%2FFB_IMG_1634775512484.jpg?alt=media&token=5bd56425-00f4-4137-8315-88b0160cef6b')

    return (
        <div>
            <div style={{ height: "100%", display: "flex", justifyContent: "center", color: "white", flexDirection: "column", alignItems: "center"}}>
                <img src={urlImg} alt="" width="300" />


                <p style={{fontFamily: "Freight", fontStyle: "italic", fontWeight: "400", fontSize: 21}}> {content} </p>
            </div>
            
            <div><Carousel /></div>
            <div style={{marginBottom: '5em'}}><ArtWorks setSelectedImg={setSelectedImg} setSelectedTitle={setSelectedTitle} /> </div>
            { selectedImg && (
                <Modal selectedTitle={selectedTitle} setSelectedTitle={setSelectedTitle} selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    )
}

