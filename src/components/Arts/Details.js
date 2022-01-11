import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { artFirestore } from '../Firestore/firebase';

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

    }, [])


    return (
        <div >
            <h1 style={{color:'teal'}}> Detail Page</h1>
            
            <section style={{width:"550px", height: "550px"}}>
                <img src={data.url} alt=""/>
            </section>
            
        </div>
    )
}
