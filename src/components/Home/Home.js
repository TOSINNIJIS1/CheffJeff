import React from 'react';
import ArtWorks from '../Arts/Artworks';
import Modal from '../Arts/Modal';
import Carousel from '../Carousel/JeffCarousel';
import HomeScreen from "../Home/home.svg";

// import { MyContextApi } from '../../useContext/context';
import useFirestore from '../Firestore/useFirestore';
import { data } from 'flickity';



export function Home({ selectedImg, setSelectedImg, selectedTitle, setSelectedTitle }) {
    const {docs} = useFirestore('artworks')

    const info = Object.keys(docs).map((id) => docs[id].docs)
    const urlImg = docs.map((data, i) =>   data.select === 'Logo' && i === 0  ? data.url : 'https://firebasestorage.googleapis.com/v0/b/cheffjeffart.appspot.com/o/artworks%2FFB_IMG_1634775512484.jpg?alt=media&token=5bd56425-00f4-4137-8315-88b0160cef6b' 
    )


    return (
        <div>
            <div style={{ height: "100%", display: "flex", justifyContent: "center", color: "white", flexDirection: "column", alignItems: "center"}}>
                {
                // docs.filter((data) => {
                //     // console.log(data)
                //     // if (data.select === 'Logo') {
                //     //     // console.log(data)
                //     //     return data.select
                //     // }
                // })
                docs.map((data, i) =>  {
                    // <img src={HomeScreen} width="300"/>

                    // if (data.select === null || data.select === '' || data.select === undefined) {
                    //     return <img src={HomeScreen} width="300"/>
                    // } else { return }
                    // data.select === 'Logo' && i === 0  ? <img src={data.url || HomeScreen} alt="" width="300"/>: null 
                }
                 )}
                <img src={urlImg} width="300" />


                <p style={{fontFamily: "Freight", fontStyle: "italic", fontWeight: "400", fontSize: 21}}> {info} </p>
            </div>
            
            <div><Carousel /></div>
            <div style={{marginBottom: '5em'}}><ArtWorks setSelectedImg={setSelectedImg} setSelectedTitle={setSelectedTitle} /> </div>
            { selectedImg && (
                <Modal selectedTitle={selectedTitle} setSelectedTitle={setSelectedTitle} selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    )
}

