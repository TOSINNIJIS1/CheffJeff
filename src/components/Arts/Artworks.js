import { Fragment, useState } from 'react';
import "../Arts/Artworks.css";
import Art from '../Arts/Art';
import useFirestore from '../Firestore/useFirestore';

const ArtWorks = ({ setSelectedImg, setSelectedTitle }) => {
    const { docs } = useFirestore('artworks')

    let categories = ['All', 'Artwork', 'Model']
    const defaultSelectValue = categories[0]
    const [select, setSelect] = useState(defaultSelectValue)

    const onCategorySelect = (cat) => {
        setSelect(cat)
    }


    return (
        <Fragment>
            {/* <h1 className="artHeader" style={{color: "white", marginTop: "1em", fontFamily: "Freight", fontWeight: "700", textAlign: 'center'}}>  </h1> */}

            <div className="form-group" style={{width: 400, margin: '2rem auto', fontFamily: "Merriweather, serif", marginTop: "2em"}}>
                <ul className="d-flex" >
                    {categories.map(category => (
                        <li
                            onClick={() => onCategorySelect(category)}
                            defaultValue={select}
                            
                            className={category === select ? "list-group-item active" : "list-group-item"}> {category} </li>
                    ))}
                </ul>
              </div>

            <Art art={docs} selected={select} setSelectedImg={setSelectedImg} setSelectedTitle={setSelectedTitle} />
        </Fragment>
    )
}


export default ArtWorks

