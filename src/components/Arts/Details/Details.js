import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { artFirestore } from '../../Firestore/firebase';

import DataImage from "./DetailsImage";
import DataInfo from "./DetailsInfo";


import './Details.css'


export default function Details() {
    const { id } = useParams()

    const [data, setData] = useState([])

    useEffect(() => {

        async function getDataById () {
            await artFirestore.collection('artworks').doc(id).get()
            .then(data => setData(data.data()))
            .catch(error => console.log(error, 'error, getting data')) 
        }
        getDataById()

    }, [id])


    return (
        <div  className="details-container">
            <h1 > ArtPiece Name </h1>
            {console.log(data)}
            <div className="details">

                <section className="image-container" >
                    <DataImage image={data.url} />
                </section>

                <section className="data-container" >
                    <DataInfo  />
                </section>
            </div>
            
            
        </div>
    )
}
