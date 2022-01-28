import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';


function ArtPiece ({ art, setSelectedImg }) {

    return (
        <React.Fragment >
            <motion.div className="card art" key={art.id} 
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setSelectedImg(art.url)}
            >
                <motion.img className='art-image card-img-top' src={art.url} alt={`${art.title} art`} width='100%' 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                />
                <div className="card-body" >
                    <h5 className="card-title text-center"> {art.title}  </h5>
                    <p className="card-text " style={ !art.description ? {border: 'solid'} : {border: 'unset'} }>{art.description} </p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </motion.div>

        </React.Fragment>

    )
}


export default function Art({ art, setSelectedImg, selected }) {
    return (
        <div className='artContainer'>
            {art
            .filter((data) => selected === 'All Artwork' ? data : data.selected === selected)
            .map(arts => (
                <React.Fragment key={arts.id.toString()}>
                <ArtPiece 
                    art={arts}
                    setSelectedImg={setSelectedImg}
                />   
                </React.Fragment>             
            ))}
        </div>
    )
}

