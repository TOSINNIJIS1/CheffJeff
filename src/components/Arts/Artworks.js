import { Fragment } from 'react';
import "../Arts/Artworks.css";
import Art from '../Arts/Art';
import useFirestore from '../Firestore/useFirestore';

const ArtWorks = ({ setSelectedImg }) => {
    const { docs } = useFirestore('artworks')


    return (
        <Fragment>
            <h1 className="artHeader" style={{color: "white", marginTop: "1em", fontFamily: "Freight", fontWeight: "700", textAlign: 'center'}}> Artworks </h1>

            <Art art={docs} setSelectedImg={setSelectedImg} />
        </Fragment>
    )
}


export default ArtWorks