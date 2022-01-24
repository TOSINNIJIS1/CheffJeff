import { Fragment, useState } from 'react';
import "../Arts/Artworks.css";
import Art from '../Arts/Art';
import useFirestore from '../Firestore/useFirestore';

const ArtWorks = ({ setSelectedImg }) => {
    const { docs } = useFirestore('artworks')

    let categories = ['All Artwork','Artwork', 'Model']
    const defaultSelectValue = categories[0]
    const [selected, setSelected] = useState(defaultSelectValue)

    

    return (
        <Fragment>
            <h1 className="artHeader" style={{color: "white", marginTop: "1em", fontFamily: "Freight", fontWeight: "700", textAlign: 'center'}}> Artworks </h1>

            <div class="form-group" style={{width: 200, margin: 'auto', fontFamily: "Merriweather, serif"}}>
                <select id="inputCategory" className='form-select' style={{textAlign: 'center'}} 
                    name={selected} value={selected} 
                    onChange={(e) => setSelected(e.target.value)}
                    defaultValue={selected}

                    >
                        {categories.map((data, i) => <option key={i} value={data}> {data} </option> )}
                    </select>             
              </div>

            <Art art={docs} selected={selected} setSelectedImg={setSelectedImg} />
        </Fragment>
    )
}


export default ArtWorks