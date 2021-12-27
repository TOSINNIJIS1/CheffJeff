import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';



function ArtPiece ({ art, setSelectedImg }) {


    return (
        // <div className='art'>
            <motion.div className="art" key={art.id} 
                        layout
                        whileHover={{ opacity: 1 }}
                        onClick={() => setSelectedImg(art.url)}
                    >
                <motion.img className='art-image' src={art.url} alt={`${art.title} art`} width='100%' 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                />
            </motion.div>
        // </div>
    )
}



export default function Art({ art, setSelectedImg }) {
    return (
        <div className='artContainer'>
            {art.map(arts => (
                <ArtPiece 
                    key={arts.id}
                    art={arts}
                    setSelectedImg={setSelectedImg}
                />
            ))}
        </div>
    )
}

